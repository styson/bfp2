import { useState } from 'react';
import { Close, Add, Remove } from '@mui/icons-material';
import type { Product } from '../../types';
import { formatPrice, isNewArrival } from '../../utils/dateHelpers';
import { useCartStore } from '../../store/cartStore';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [shippingType, setShippingType] = useState<'domestic' | 'international'>('domestic');
  const { addItem } = useCartStore();

  if (!isOpen || !product) return null;

  const isNew = isNewArrival(product.releaseDate);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, shippingType);
    }
    onClose();
    setQuantity(1);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal — relative so the close button positions correctly */}
        <div
          className="relative bg-[#13141f] border border-[#f0b429]/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#e2e2e2] border border-[#f0b429]/30 hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200 z-10"
            aria-label="Close modal"
          >
            <Close />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left - Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto bg-[#0f1018]"
              />
              {isNew && (
                <div className="absolute top-4 left-4 bg-[#f0b429] text-[#1a1b2a] px-4 py-2 text-sm font-bold uppercase tracking-wider font-sans">
                  New Arrival
                </div>
              )}
            </div>

            {/* Right - Details */}
            <div className="flex flex-col space-y-6">
              <div>
                <p className="text-xs text-[#5bc9e8] uppercase tracking-wider mb-2 font-sans">
                  {product.category}
                </p>
                <h2 className="text-3xl uppercase text-[#f0b429] mb-4">
                  {product.name}
                </h2>
                <p className="text-2xl font-black text-[#e2e2e2] font-sans">{formatPrice(product.price)}</p>
              </div>

              <div className="border-t border-[#f0b429]/20 pt-6">
                <h3 className="font-bold uppercase text-sm mb-2 text-[#e2e2e2]/60 font-sans">Description</h3>
                <p className="text-[#e2e2e2]/80 leading-relaxed font-sans">{product.description}</p>
              </div>

              {/* Shipping Type Selector */}
              <div className="border-t border-[#f0b429]/20 pt-6">
                <h3 className="font-bold uppercase text-sm mb-3 text-[#e2e2e2]/60 font-sans">Shipping</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShippingType('domestic')}
                    className={`flex-1 py-3 px-4 font-bold uppercase text-sm transition-[background-color,color,border-color] duration-200 border font-sans ${
                      shippingType === 'domestic'
                        ? 'bg-[#f0b429] text-[#1a1b2a] border-[#f0b429]'
                        : 'bg-transparent text-[#e2e2e2]/70 border-[#f0b429]/30 hover:border-[#f0b429]/70'
                    }`}
                  >
                    Domestic
                  </button>
                  <button
                    onClick={() => setShippingType('international')}
                    className={`flex-1 py-3 px-4 font-bold uppercase text-sm transition-[background-color,color,border-color] duration-200 border font-sans ${
                      shippingType === 'international'
                        ? 'bg-[#f0b429] text-[#1a1b2a] border-[#f0b429]'
                        : 'bg-transparent text-[#e2e2e2]/70 border-[#f0b429]/30 hover:border-[#f0b429]/70'
                    }`}
                  >
                    International
                  </button>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="border-t border-[#f0b429]/20 pt-6">
                <h3 className="font-bold uppercase text-sm mb-3 text-[#e2e2e2]/60 font-sans">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 border border-[#f0b429]/30 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
                    aria-label="Decrease quantity"
                  >
                    <Remove />
                  </button>
                  <span className="text-2xl font-bold w-12 text-center text-[#e2e2e2] font-sans">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 border border-[#f0b429]/30 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
                    aria-label="Increase quantity"
                  >
                    <Add />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#f0b429] text-[#1a1b2a] py-4 font-black uppercase tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 mt-6 font-sans disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <p className="text-xs text-[#e2e2e2]/30 text-center font-sans">
                SKU: {product.paypalItemCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
