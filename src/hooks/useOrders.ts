import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import type { CartItem } from '../types';

export interface Order {
  id: string;
  paypal_order_id: string | null;
  status: 'pending' | 'completed' | 'refunded';
  items: CartItem[];
  total_usd: number;
  created_at: string;
}

export const useOrders = () => {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      const { data, error: err } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (err) {
        setError(err.message);
      } else {
        setOrders((data ?? []) as Order[]);
      }
      setLoading(false);
    };

    fetchOrders();
  }, [user?.id]);

  return { orders, loading, error };
};
