import { formatPrice, isNewArrival } from '../../utils/dateHelpers';
import { ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onQuickAdd: (product: Product) => void;
  onClick: (product: Product) => void;
}

export const ProductCard = ({ product, onQuickAdd, onClick }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isNew = isNewArrival(product.releaseDate);

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
        {isHovered && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            className="absolute bottom-4 left-4 right-4 bg-[#f0b429] text-[#1a1b2a] py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#f0b429]/80 transition-[background-color] duration-200 font-sans"
          >
            <ShoppingCart fontSize="small" />
            Quick Add
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
