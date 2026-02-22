import { Receipt } from '@mui/icons-material';
import { useOrders } from '../../hooks/useOrders';
import { formatPrice } from '../../utils/dateHelpers';

const statusColors: Record<string, string> = {
  completed: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  pending:   'text-[#f0b429] bg-[#f0b429]/10 border-[#f0b429]/30',
  refunded:  'text-red-400 bg-red-400/10 border-red-400/30',
};

export const OrderHistory = () => {
  const { orders, loading, error } = useOrders();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-[#f0b429]/30 border-t-[#f0b429] rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-red-400 font-sans text-sm">Failed to load orders: {error}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Receipt className="text-[#f0b429]/20 mb-4" style={{ fontSize: 48 }} />
        <p className="text-lg font-black uppercase tracking-wider text-[#e2e2e2]/40">
          No orders yet
        </p>
        <p className="text-sm text-[#e2e2e2]/25 font-sans mt-2">
          Your completed purchases will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-[#f0b429]/20 bg-[#1a1b2a] hover:border-[#f0b429]/40 transition-[border-color] duration-200"
        >
          {/* Order header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0b429]/10">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#f0b429]">
                  Order
                </p>
                <p className="text-[10px] text-[#e2e2e2]/30 font-mono mt-0.5">
                  {order.id.slice(0, 8).toUpperCase()}
                </p>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-black uppercase tracking-wider text-[#e2e2e2]/50">
                  Date
                </p>
                <p className="text-[10px] text-[#e2e2e2]/30 font-sans mt-0.5">
                  {new Date(order.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 border ${statusColors[order.status] ?? statusColors.pending}`}
              >
                {order.status}
              </span>
              <span className="text-base font-black text-[#f0b429]">
                {formatPrice(order.total_usd)}
              </span>
            </div>
          </div>

          {/* Order items */}
          <div className="px-5 py-4 space-y-2">
            {(order.items ?? []).map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-cover bg-[#0f1018] flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#e2e2e2] truncate">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-[#5bc9e8] uppercase font-sans mt-0.5">
                    {item.shippingType} · qty {item.quantity}
                  </p>
                </div>
                <p className="text-xs font-bold text-[#e2e2e2]/60 flex-shrink-0 font-sans">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
