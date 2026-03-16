import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import type { FilterState } from '../../types';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableCategories: string[];
  availableSizes: string[];
  availableColors: string[];
  search: string;
  onSearchChange: (value: string) => void;
}

export const FilterSidebar = ({ filters, onFilterChange, availableCategories, availableSizes, availableColors, search, onSearchChange }: FilterSidebarProps) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    category: true,
    size: true,
    color: true,
    price: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: newSizes });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: 99999 },
  ];

  return (
    <aside className="w-full lg:w-64 bg-[#13141f] border border-[#f0b429]/20">
      <div className="sticky top-24 p-6 space-y-6">
        <h2 className="text-xl uppercase text-[#f0b429]">Filters</h2>

        {/* Search */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e2e2e2]/30 pointer-events-none"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products…"
            className="w-full bg-[#1a1b2a] border border-[#f0b429]/20 text-[#e2e2e2] placeholder-[#e2e2e2]/25 pl-9 pr-8 py-2.5 text-sm font-sans focus:outline-none focus:border-[#f0b429]/60 transition-[border-color] duration-200"
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e2e2e2]/30 hover:text-[#e2e2e2]/70 transition-[color] duration-200"
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="border-b border-[#f0b429]/20 pb-4">
          <button
            onClick={() => toggleSection('category')}
            className="w-full flex items-center justify-between py-2 font-bold uppercase text-sm text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200 font-sans"
          >
            <span>Category</span>
            <ExpandMore
              className={`transform transition-transform duration-200 ${
                openSections.category ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSections.category && (
            <div className="mt-3 space-y-2">
              {availableCategories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 cursor-pointer text-[#e2e2e2]/70 hover:text-[#f0b429] transition-colors duration-200 font-sans"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="w-4 h-4 cursor-pointer accent-[#f0b429]"
                  />
                  <span className="text-sm uppercase">{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Size Filter */}
        {availableSizes.length > 0 && (
          <div className="border-b border-[#f0b429]/20 pb-4">
            <button
              onClick={() => toggleSection('size')}
              className="w-full flex items-center justify-between py-2 font-bold uppercase text-sm text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200 font-sans"
            >
              <span>Size</span>
              <ExpandMore
                className={`transform transition-transform duration-200 ${
                  openSections.size ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openSections.size && (
              <div className="mt-3 space-y-2">
                {availableSizes.map((size) => (
                  <label
                    key={size}
                    className="flex items-center gap-2 cursor-pointer text-[#e2e2e2]/70 hover:text-[#f0b429] transition-colors duration-200 font-sans"
                  >
                    <input
                      type="checkbox"
                      checked={filters.sizes.includes(size)}
                      onChange={() => handleSizeToggle(size)}
                      className="w-4 h-4 cursor-pointer accent-[#f0b429]"
                    />
                    <span className="text-sm uppercase">{size}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Color Filter */}
        {availableColors.length > 0 && (
          <div className="border-b border-[#f0b429]/20 pb-4">
            <button
              onClick={() => toggleSection('color')}
              className="w-full flex items-center justify-between py-2 font-bold uppercase text-sm text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200 font-sans"
            >
              <span>Color</span>
              <ExpandMore
                className={`transform transition-transform duration-200 ${
                  openSections.color ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openSections.color && (
              <div className="mt-3 space-y-2">
                {availableColors.map((color) => (
                  <label
                    key={color}
                    className="flex items-center gap-2 cursor-pointer text-[#e2e2e2]/70 hover:text-[#f0b429] transition-colors duration-200 font-sans"
                  >
                    <input
                      type="checkbox"
                      checked={filters.colors.includes(color)}
                      onChange={() => handleColorToggle(color)}
                      className="w-4 h-4 cursor-pointer accent-[#f0b429]"
                    />
                    <span className="text-sm uppercase">{color}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Price Range Filter */}
        <div className="border-b border-[#f0b429]/20 pb-4">
          <button
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between py-2 font-bold uppercase text-sm text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200 font-sans"
          >
            <span>Price Range</span>
            <ExpandMore
              className={`transform transition-transform duration-200 ${
                openSections.price ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSections.price && (
            <div className="mt-3 space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => handlePriceChange(range.min, range.max)}
                  className={`w-full text-left px-3 py-2 text-sm uppercase transition-[background-color,color] duration-200 border font-sans ${
                    filters.priceRange[0] === range.min && filters.priceRange[1] === range.max
                      ? 'bg-[#f0b429] text-[#1a1b2a] border-[#f0b429]'
                      : 'bg-transparent text-[#e2e2e2]/70 border-[#f0b429]/20 hover:border-[#f0b429]/60 hover:text-[#f0b429]'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {(search || filters.categories.length > 0 || filters.priceRange[0] !== 0 || filters.priceRange[1] !== 99999) && (
          <button
            onClick={() => {
              onSearchChange('');
              onFilterChange({
                categories: [],
                sizes: [],
                colors: [],
                priceRange: [0, 99999],
              });
            }}
            className="w-full py-3 bg-transparent text-[#e2e2e2]/60 border border-[#f0b429]/30 font-bold uppercase text-sm hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200 font-sans"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </aside>
  );
};
