import { Close, Delete, Add, Remove } from '@mui/icons-material';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../utils/dateHelpers';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

export const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getSubtotal, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const subtotal = getSubtotal();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#13141f] border-l border-[#f0b429]/20 shadow-2xl z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#f0b429]/20">
          <h2 className="text-2xl uppercase text-[#f0b429]">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 border border-[#f0b429]/30 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
            aria-label="Close cart"
          >
            <Close />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl font-bold text-[#e2e2e2] mb-2">Your cart is empty</p>
              <p className="text-[#e2e2e2]/40 font-sans">Add some products to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.shippingType}`} className="flex gap-4 border-b border-[#f0b429]/10 pb-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover bg-[#0f1018]"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-sm uppercase text-[#f0b429]">{item.name}</h3>
                  <p className="text-xs text-[#5bc9e8] uppercase mt-1 font-sans">
                    {item.shippingType} shipping
                  </p>
                  <p className="font-bold mt-2 text-[#e2e2e2] font-sans">{formatPrice(item.price)}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 border border-[#f0b429]/30 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
                      aria-label="Decrease quantity"
                    >
                      <Remove fontSize="small" />
                    </button>
                    <span className="font-bold w-8 text-center text-[#e2e2e2] font-sans">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 border border-[#f0b429]/30 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
                      aria-label="Increase quantity"
                    >
                      <Add fontSize="small" />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-[#e2e2e2]/30 hover:text-red-400 transition-colors duration-200"
                  aria-label="Remove item"
                >
                  <Delete />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer - Subtotal and Checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#f0b429]/20 p-6 space-y-4 overflow-y-auto max-h-[60vh]">
            <div className="flex items-center justify-between text-xl font-black uppercase text-[#e2e2e2] font-sans">
              <span>Subtotal:</span>
              <span className="text-[#f0b429]">{formatPrice(subtotal)}</span>
            </div>

            <PayPalScriptProvider
              options={{
                clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || '',
                currency: 'USD',
              }}
            >
              <PayPalButtons
                style={{
                  layout: 'vertical',
                  color: 'gold',
                  shape: 'rect',
                  label: 'checkout',
                }}
                createOrder={(_data, actions) => {
                  return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                      {
                        amount: {
                          currency_code: 'USD',
                          value: subtotal.toFixed(2),
                          breakdown: {
                            item_total: {
                              currency_code: 'USD',
                              value: subtotal.toFixed(2),
                            },
                          },
                        },
                        items: items.map((item) => ({
                          name: item.name,
                          unit_amount: {
                            currency_code: 'USD',
                            value: item.price.toFixed(2),
                          },
                          quantity: item.quantity.toString(),
                          sku: item.paypalItemCode,
                        })),
                      },
                    ],
                  });
                }}
                onApprove={async (_data, actions) => {
                  if (actions.order) {
                    const details = await actions.order.capture();

                    // Record order in Supabase if signed in
                    if (user) {
                      await supabase.from('orders').insert({
                        user_id: user.id,
                        paypal_order_id: details.id,
                        status: 'completed',
                        items: items,
                        total_usd: subtotal,
                      });
                    }

                    alert('Transaction completed by ' + details.payer?.name?.given_name);
                    clearCart();
                    toggleCart();
                  }
                }}
                onError={(err) => {
                  console.error('PayPal Error:', err);
                  alert('An error occurred with PayPal. Please try again.');
                }}
              />
            </PayPalScriptProvider>

            <p className="text-xs text-[#e2e2e2]/30 text-center font-sans">
              Secure checkout powered by PayPal
            </p>
          </div>
        )}
      </div>
    </>
  );
};
