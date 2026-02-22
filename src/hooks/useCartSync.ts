import { products } from '../data/products';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import { useEffect, useRef } from 'react';
import type { CartItem } from '../types';

/**
 * Mounts once in App. Handles three responsibilities:
 *  1. On sign-in: merge guest localStorage cart with DB cart, write merged to DB
 *  2. On sign-out: clear local cart (DB cart is preserved for next sign-in)
 *  3. Ongoing: subscribe to cart changes and sync to DB while signed in
 */
export const useCartSync = () => {
  const { user } = useAuthStore();
  const prevUserIdRef = useRef<string | null>(null);
  const isSyncing = useRef(false);

  // ── 1. Merge on sign-in ──────────────────────────────────────────────────
  useEffect(() => {
    if (!user) return;

    const merge = async () => {
      isSyncing.current = true;
      try {
        const localItems = useCartStore.getState().items;

        const { data: dbRows } = await supabase
          .from('cart_items')
          .select('*')
          .eq('user_id', user.id);

        // Build merged map keyed by `productId-shippingType`
        const mergedMap = new Map<string, CartItem>();

        for (const row of dbRows ?? []) {
          const product = products.find((p) => p.id === row.product_id);
          if (!product) continue;
          const shippingType: 'domestic' | 'international' =
            row.variant?.shippingType ?? 'domestic';
          const key = `${row.product_id}-${shippingType}`;
          mergedMap.set(key, { ...product, quantity: row.quantity, shippingType });
        }

        // Merge local items — add quantities for matching entries
        for (const item of localItems) {
          const key = `${item.id}-${item.shippingType}`;
          if (mergedMap.has(key)) {
            const existing = mergedMap.get(key)!;
            mergedMap.set(key, { ...existing, quantity: existing.quantity + item.quantity });
          } else {
            mergedMap.set(key, { ...item });
          }
        }

        const mergedItems = Array.from(mergedMap.values());
        useCartStore.getState().setItems(mergedItems);

        // Write merged state to DB (replace)
        await supabase.from('cart_items').delete().eq('user_id', user.id);
        if (mergedItems.length > 0) {
          await supabase.from('cart_items').insert(
            mergedItems.map((item) => ({
              user_id: user.id,
              product_id: item.id,
              quantity: item.quantity,
              variant: { shippingType: item.shippingType },
            }))
          );
        }
      } finally {
        isSyncing.current = false;
      }
    };

    merge();
  }, [user?.id]);

  // ── 2. Clear local cart on sign-out ─────────────────────────────────────
  useEffect(() => {
    const prevId = prevUserIdRef.current;
    const currentId = user?.id ?? null;

    if (prevId && !currentId) {
      // User just signed out — clear local cart (DB cart is untouched)
      useCartStore.getState().clearCart();
    }

    prevUserIdRef.current = currentId;
  }, [user?.id]);

  // ── 3. Ongoing sync: subscribe to cart changes while signed in ───────────
  useEffect(() => {
    if (!user) return;

    const unsubscribe = useCartStore.subscribe(async (state, prevState) => {
      if (state.items === prevState.items) return;
      if (isSyncing.current) return;

      const currentUser = useAuthStore.getState().user;
      if (!currentUser) return;

      // Replace strategy: delete all + re-insert
      await supabase.from('cart_items').delete().eq('user_id', currentUser.id);
      if (state.items.length > 0) {
        await supabase.from('cart_items').insert(
          state.items.map((item) => ({
            user_id: currentUser.id,
            product_id: item.id,
            quantity: item.quantity,
            variant: { shippingType: item.shippingType },
          }))
        );
      }
    });

    return unsubscribe;
  }, [user?.id]);
};
