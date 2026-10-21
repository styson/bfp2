import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import type { CartItem } from '../types';

interface Order {
  id: string;
  paypal_order_id: string | null;
  status: 'pending' | 'completed' | 'refunded';
  items: CartItem[];
  total_usd: number;
  created_at: string;
}

interface OrdersResult {
  userId: string;
  orders: Order[];
  error: string | null;
}

export const useOrders = () => {
  const { user } = useAuthStore();
  const userId = user?.id;
  // Keyed by user so a sign-out or user switch never shows another user's orders
  const [result, setResult] = useState<OrdersResult | null>(null);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;

    const fetchOrders = async () => {
      const { data, error: err } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (cancelled) return;
      setResult({
        userId,
        orders: err ? [] : ((data ?? []) as Order[]),
        error: err ? err.message : null,
      });
    };

    fetchOrders();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const current = userId && result?.userId === userId ? result : null;
  return {
    orders: current?.orders ?? [],
    loading: !!userId && !current,
    error: current?.error ?? null,
  };
};
