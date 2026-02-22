import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartStore, CartItem, Product } from '../types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, shippingType: 'domestic' | 'international') => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id && item.shippingType === shippingType
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.shippingType === shippingType
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1, shippingType }],
          };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      setItems: (items: CartItem[]) => {
        set({ items });
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'bfp-cart-storage',
    }
  )
);