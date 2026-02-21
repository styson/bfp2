import { useState, useMemo } from 'react';
import type { Product, FilterState } from '../../types';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from '../filters/FilterSidebar';
import { useCartStore } from '../../store/cartStore';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid = ({ products, onProductClick }: ProductGridProps) => {
  const { addItem } = useCartStore();
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    sizes: [],
    colors: [],
    priceRange: [0, 99999],
  });

  const availableCategories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  const availableSizes = useMemo(() => {
    return Array.from(new Set(products.flatMap((p) => p.sizes ?? [])));
  }, [products]);

  const availableColors = useMemo(() => {
    return Array.from(new Set(products.flatMap((p) => p.colors ?? [])));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      if (filters.sizes.length > 0 && !filters.sizes.some((s) => product.sizes?.includes(s))) {
        return false;
      }
      if (filters.colors.length > 0 && !filters.colors.some((c) => product.colors?.includes(c))) {
        return false;
      }
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      return true;
    });
  }, [products, filters]);

  const handleQuickAdd = (product: Product) => {
    addItem(product, 'domestic');
  };

  return (
    <section id="products" className="bg-[#1a1b2a] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-4">
            Our Products
          </h2>
          <p className="text-[#e2e2e2]/60 max-w-2xl mx-auto font-sans">
            Scenarios, campaigns, counters, and boards crafted for serious tactical gamers
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
            availableCategories={availableCategories}
            availableSizes={availableSizes}
            availableColors={availableColors}
          />

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl font-bold text-[#e2e2e2] mb-2">No products found</p>
                <p className="text-[#e2e2e2]/50 font-sans">Try adjusting your filters</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-[#e2e2e2]/40 mb-6 font-sans">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickAdd={handleQuickAdd}
                      onClick={onProductClick}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
