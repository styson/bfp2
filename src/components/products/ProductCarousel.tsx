import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import type { Product } from '../../types';
import { formatPrice } from '../../utils/dateHelpers';

interface ProductCarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductCarousel = ({ products, onProductClick }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  if (products.length === 0) return null;

  const currentProduct = products[currentIndex];

  return (
    <section className="relative bg-[#13141f] text-[#e2e2e2] overflow-hidden border-y border-[#f0b429]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Product Info */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#f0b429] text-[#1a1b2a] text-xs font-bold uppercase tracking-wider font-sans">
              Featured Product
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight text-[#f0b429]">
              {currentProduct.name}
            </h2>
            <p className="text-base text-[#e2e2e2]/70 leading-relaxed max-w-lg font-sans">
              {currentProduct.description}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-3xl font-black text-[#e2e2e2] font-sans">{formatPrice(currentProduct.price)}</p>
              <button
                onClick={() => onProductClick(currentProduct)}
                className="px-8 py-4 bg-[#f0b429] text-[#1a1b2a] font-bold uppercase tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 border-2 border-[#f0b429]"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="relative aspect-[3/4]">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13141f]/40 to-transparent" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          <button
            onClick={goToPrevious}
            className="p-4 border border-[#f0b429]/40 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-[width,background-color] duration-300 ${
                  index === currentIndex
                    ? 'bg-[#f0b429] w-8'
                    : 'bg-[#e2e2e2]/30 w-2 hover:bg-[#e2e2e2]/60'
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-4 border border-[#f0b429]/40 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
