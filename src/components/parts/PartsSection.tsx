import { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { parts } from '../../data/parts';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../utils/dateHelpers';
import type { Product } from '../../types';
import type { Part } from '../types';

function partToProduct(part: Part, price: number, label: string): Product {
  return {
    id: `part-${part.paypalKey}-${label}`,
    name: part.name + (label ? ` (${label})` : ''),
    description: '',
    price,
    image: part.image ?? '',
    category: 'Parts',
    paypalItemCode: part.paypalKey ?? '',
    releaseDate: '2024-01-01',
    inStock: true,
  };
}

// ── Board card ────────────────────────────────────────────────────────────────
function BoardCard({ part }: { part: Part }) {
  const { addItem } = useCartStore();
  if (part.active === false || !part.price) return null;

  return (
    <div className="bg-[#13141f] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200 flex flex-col">
      {part.image && (
        <div className="bg-[#0f1018] overflow-hidden">
          <img src={part.image} alt={part.name} className="w-full h-28 object-contain p-2" />
        </div>
      )}
      <div className="p-3 flex flex-col gap-2 flex-1 justify-between">
        <p className="text-[#f0b429] uppercase text-sm font-bold leading-tight">{part.name}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[#e2e2e2] font-black text-base font-sans">{formatPrice(part.price)}</span>
          <button
            onClick={() => addItem(partToProduct(part, part.price!, ''), 'domestic')}
            className="p-2 bg-[#f0b429] text-[#1a1b2a] hover:bg-[#f0b429]/80 transition-[background-color] duration-200"
            aria-label={`Add ${part.name} to cart`}
          >
            <ShoppingCart fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Counter card ──────────────────────────────────────────────────────────────
function CounterCard({ part }: { part: Part }) {
  const { addItem } = useCartStore();
  const [selectedIdx, setSelectedIdx] = useState(0);
  if (!part.prices?.length) return null;

  const selected = part.prices[selectedIdx];

  return (
    <div className="bg-[#13141f] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200 p-4 flex flex-col gap-3">
      <p className="text-[#f0b429] uppercase text-sm font-bold leading-tight">{part.name}</p>
      <div className="flex flex-col gap-2">
        {part.prices.map((tier, i) => (
          <label key={tier.type} className="flex items-center justify-between cursor-pointer group">
            <span className={`text-sm uppercase font-sans transition-colors duration-200 ${i === selectedIdx ? 'text-[#f0b429]' : 'text-[#e2e2e2]/50 group-hover:text-[#e2e2e2]/80'}`}>
              {tier.type}
            </span>
            <span className="flex items-center gap-2">
              <span className={`text-sm font-black font-sans ${i === selectedIdx ? 'text-[#e2e2e2]' : 'text-[#e2e2e2]/40'}`}>
                {formatPrice(tier.price)}
              </span>
              <input
                type="radio"
                name={`counter-${part.paypalKey}`}
                checked={i === selectedIdx}
                onChange={() => setSelectedIdx(i)}
                className="accent-[#f0b429] cursor-pointer"
              />
            </span>
          </label>
        ))}
      </div>
      <button
        onClick={() => addItem(partToProduct(part, selected.price, selected.type), 'domestic')}
        className="w-full flex items-center justify-center gap-2 py-2 bg-[#f0b429] text-[#1a1b2a] font-bold uppercase text-xs tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 font-sans"
      >
        <ShoppingCart fontSize="small" />
        Add to Cart
      </button>
    </div>
  );
}

// ── HASL map card ─────────────────────────────────────────────────────────────
function HaslCard({ part }: { part: Part }) {
  const { addItem } = useCartStore();
  if (!part.price) return null;

  return (
    <div className="bg-[#13141f] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200 flex flex-col">
      {part.image && (
        <div className="bg-[#0f1018] overflow-hidden">
          <img src={part.image} alt={part.name} className="w-full h-32 object-contain p-2" />
        </div>
      )}
      <div className="p-3 flex flex-col gap-2 flex-1 justify-between">
        <p className="text-[#f0b429] uppercase text-sm font-bold leading-tight">{part.name}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[#e2e2e2] font-black text-base font-sans">{formatPrice(part.price)}</span>
          <button
            onClick={() => addItem(partToProduct(part, part.price!, ''), 'domestic')}
            className="p-2 bg-[#f0b429] text-[#1a1b2a] hover:bg-[#f0b429]/80 transition-[background-color] duration-200"
            aria-label={`Add ${part.name} to cart`}
          >
            <ShoppingCart fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export const PartsSection = () => {
  const boardGroups = parts.filter((p) => p.type === 'boards');
  const counters = parts.filter((p) => p.type === 'counters');
  const haslMaps = parts.filter((p) => p.type === 'hasl');

  return (
    <section id="parts" className="bg-[#13141f] py-16 border-t border-[#f0b429]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-4">Parts & Add-ons</h2>
          <p className="text-[#e2e2e2]/60 max-w-2xl mx-auto font-sans">
            Individual boards, replacement counters, and HASL map sheets available separately
          </p>
        </div>

        {/* Boards */}
        <div className="mb-14">
          <h3 className="text-2xl uppercase text-[#e2e2e2] mb-6 pb-2 border-b border-[#f0b429]/20">
            Individual Boards
          </h3>
          <div className="space-y-8">
            {boardGroups.map((group) => {
              const activeBoards = group.files?.filter((f) => f.active !== false) ?? [];
              if (activeBoards.length === 0) return null;
              return (
                <div key={group.group ?? group.name}>
                  <p className="text-sm uppercase tracking-widest text-[#e2e2e2]/40 font-sans mb-3">
                    {group.name}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {activeBoards.map((board) => (
                      <BoardCard key={board.paypalKey} part={board} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Counters */}
        <div className="mb-14">
          <h3 className="text-2xl uppercase text-[#e2e2e2] mb-6 pb-2 border-b border-[#f0b429]/20">
            Replacement Counters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {counters.map((part) => (
              <CounterCard key={part.paypalKey} part={part} />
            ))}
          </div>
        </div>

        {/* HASL Maps */}
        <div>
          <h3 className="text-2xl uppercase text-[#e2e2e2] mb-6 pb-2 border-b border-[#f0b429]/20">
            HASL Map Sheets
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {haslMaps.map((part) => (
              <HaslCard key={part.paypalKey} part={part} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
