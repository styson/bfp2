import { formatPrice, isNewArrival } from '../../utils/dateHelpers';
import { ShoppingCart, Check } from '@mui/icons-material';
import { useState, useRef } from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onQuickAdd: (product: Product) => void;
  onClick: (product: Product) => void;
}

export const ProductCard = ({ product, onQuickAdd, onClick }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isNew = isNewArrival(product.releaseDate);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product);
    setAdded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative bg-[#13141f] cursor-pointer hover-lift border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[7/9] overflow-hidden bg-[#0f1018]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* New Arrival Badge */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-[#f0b429] text-[#1a1b2a] px-3 py-1 text-xs font-bold uppercase tracking-wider font-sans">
            New Arrival
          </div>
        )}

        {/* Quick Add Button - Appears on Hover */}
        {(isHovered || added) && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-[background-color] duration-200 font-sans ${added ? 'bg-green-500 text-white' : 'bg-[#f0b429] text-[#1a1b2a] hover:bg-[#f0b429]/80'}`}
          >
            {added ? <Check fontSize="small" /> : <ShoppingCart fontSize="small" />}
            {added ? 'Added!' : 'Quick Add'}
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-[#f0b429] uppercase text-[30px] line-clamp-2 min-h-[4rem] leading-tight">
          {product.name}
        </h3>
        <p className="text-base text-[#e2e2e2]/50 uppercase font-sans">{product.category}</p>
        <p className="text-2xl font-black text-[#e2e2e2] font-sans">{formatPrice(product.price)}</p>
        {product.intPrice && (
          <p className="text-sm text-[#e2e2e2]/60 font-sans">{formatPrice(product.intPrice)} intl.</p>
        )}
      </div>
    </div>
  );
};
