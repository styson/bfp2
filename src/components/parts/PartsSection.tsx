import { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Close, ZoomIn } from '@mui/icons-material';
import { parts } from '../../data/parts';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../utils/dateHelpers';
import type { Product } from '../../types';
import type { Part } from '../types';

// ── Lightbox ───────────────────────────────────────────────────────────────────
function Lightbox({ src, src2, title, onClose }: { src: string; src2?: string; title: string; onClose: () => void }) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 flex items-start justify-center p-10 pt-12 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center gap-1"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-[#e2e2e2]/60 hover:text-[#f0b429] transition-colors duration-200"
          aria-label="Close"
        >
          <Close />
        </button>
        <img
          src={src}
          alt={title}
          className="max-w-full"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {src2 && (
          <img
            src={src2}
            alt={`${title} (B)`}
            className="max-w-full"
            style={{ imageRendering: 'crisp-edges' }}
          />
        )}
        {title && (
          <p className="mt-3 text-sm uppercase tracking-widest text-[#e2e2e2]/50 font-sans">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}

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
function BoardCard({ part, onImageClick }: { part: Part; onImageClick: (src: string, title: string, src2?: string) => void }) {
  const { addItem } = useCartStore();
  if (!part.price) return null;
  const soldOut = part.active === false;

  return (
    <div className="bg-[#13141f] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200 flex flex-col">
      {part.image && (
        <div
          className="bg-[#0f1018] overflow-hidden relative group cursor-zoom-in"
          onClick={() => onImageClick(part.image!, part.name, part.image2)}
        >
          <img src={part.image} alt={part.name} className="w-full h-20 object-contain px-2 pt-2 transition-opacity duration-200 group-hover:opacity-70" />
          {part.image2 && (
            <img src={part.image2} alt={`${part.name} B`} className="w-full h-20 object-contain px-2 pb-2 transition-opacity duration-200 group-hover:opacity-70" />
          )}
          {!part.image2 && <div className="pb-2" />}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ZoomIn className="text-[#f0b429]" />
          </div>
        </div>
      )}
      <div className="p-3 flex flex-col gap-2 flex-1 justify-between">
        <p className="text-[#f0b429] uppercase text-sm font-bold leading-tight">{part.name}</p>
        {soldOut ? (
          <span className="text-xs font-bold uppercase tracking-wider text-[#e2e2e2]/30 font-sans">Sold Out</span>
        ) : (
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
        )}
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
function HaslCard({ part, onImageClick }: { part: Part; onImageClick: (src: string, title: string) => void }) {
  const { addItem } = useCartStore();
  if (!part.price) return null;

  return (
    <div className="bg-[#13141f] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200 flex flex-col">
      {part.image && (
        <div
          className="bg-[#0f1018] overflow-hidden relative group cursor-zoom-in"
          onClick={() => onImageClick(part.image!, part.name)}
        >
          <img src={part.image} alt={part.name} className="w-full h-32 object-contain p-2 transition-opacity duration-200 group-hover:opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ZoomIn className="text-[#f0b429]" />
          </div>
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

  const [lightbox, setLightbox] = useState<{ src: string; src2?: string; title: string } | null>(null);
  const openLightbox = useCallback((src: string, title: string, src2?: string) => setLightbox({ src, src2, title }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="parts" className="bg-[#13141f] py-16 border-t border-[#f0b429]/20">
      {lightbox && <Lightbox src={lightbox.src} src2={lightbox.src2} title={lightbox.title} onClose={closeLightbox} />}
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
              const activeBoards = group.files ?? [];
              if (activeBoards.length === 0) return null;
              return (
                <div key={group.group ?? group.name}>
                  <p className="text-sm uppercase tracking-widest text-[#e2e2e2]/40 font-sans mb-3">
                    {group.name}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {activeBoards.map((board) => (
                      <BoardCard key={board.paypalKey} part={board} onImageClick={openLightbox} />
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
              <HaslCard key={part.paypalKey} part={part} onImageClick={openLightbox} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
