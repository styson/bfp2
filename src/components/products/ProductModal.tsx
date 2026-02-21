import { useState } from 'react';
import { Close, Add, Remove } from '@mui/icons-material';
import type { Product, Scenario } from '../../types';
import { formatPrice, isNewArrival } from '../../utils/dateHelpers';
import { useCartStore } from '../../store/cartStore';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const htmlProps = 'text-[#e2e2e2]/80 leading-relaxed font-sans [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1 [&_h5]:text-[#f0b429] [&_h5]:uppercase [&_h5]:text-sm [&_h5]:font-bold [&_h5]:mt-4 [&_h5]:mb-2 [&_table]:text-sm [&_td]:pr-4 [&_td]:py-0.5 [&_b]:text-[#e2e2e2] [&_i]:text-[#e2e2e2]/70 [&_sup]:text-xs [&_a]:text-[#5bc9e8] [&_a]:underline';


function ScenarioTable({ scenarios }: { scenarios: Scenario[] }) {
  // Filter out legend/note rows (empty id and not a real scenario)
  const rows = scenarios.filter((s) => s.name && !(s.id === '' && s.name.startsWith('(')));
  const notes = scenarios.filter((s) => s.id === '' && s.name.startsWith('('));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-sans border-collapse">
        <thead>
          <tr className="border-b border-[#f0b429]/20">
            <th className="text-left py-2 pr-4 text-[#e2e2e2]/40 uppercase text-xs tracking-wider font-bold whitespace-nowrap">ID</th>
            <th className="text-left py-2 pr-4 text-[#e2e2e2]/40 uppercase text-xs tracking-wider font-bold">Title</th>
            <th className="text-left py-2 text-[#e2e2e2]/40 uppercase text-xs tracking-wider font-bold whitespace-nowrap">Attacker</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s, i) => (
            <tr key={`${s.id}-${i}`} className={`border-b border-[#f0b429]/10 ${s.att ?? ''}`}>
              <td className="py-1.5 pr-4 text-[#e2e2e2]/70 whitespace-nowrap align-top">{s.id}</td>
              <td
                className="py-1.5 pr-4 text-[#e2e2e2]/90 align-top"
                dangerouslySetInnerHTML={{ __html: s.name }}
              />
              <td className="py-1.5 capitalize align-top whitespace-nowrap text-[#e2e2e2]/60">
                {s.att ?? ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {notes.map((n, i) => (
        <p key={i} className="mt-3 text-xs text-[#e2e2e2]/30 font-sans italic">{n.name}</p>
      ))}
    </div>
  );
}

type Tab = 'details' | 'includes' | 'scenarios';

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [shippingType, setShippingType] = useState<'domestic' | 'international'>('domestic');
  const [activeTab, setActiveTab] = useState<Tab>('details');
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

  const tabs: { id: Tab; label: string; show: boolean }[] = [
    { id: 'details',   label: 'Details',   show: true },
    { id: 'includes',  label: 'Includes',  show: !!product.includes },
    { id: 'scenarios', label: 'Scenarios', show: !!(product.scenarios?.length) },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
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
            {/* Left — Image */}
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

            {/* Right — Header + Tabs + Content */}
            <div className="flex flex-col space-y-4">
              {/* Product header */}
              <div>
                <p className="text-xs text-[#5bc9e8] uppercase tracking-wider mb-2 font-sans">
                  {product.category}
                </p>
                <h2 className="text-3xl uppercase text-[#f0b429] mb-2">
                  {product.name}
                </h2>
                <p className="text-2xl font-black text-[#e2e2e2] font-sans">{formatPrice(product.price)}</p>
              </div>

              {/* Tab bar */}
              <div className="flex border-b border-[#f0b429]/20">
                {tabs.filter((t) => t.show).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-wider font-sans transition-[color,border-color] duration-200 border-b-2 -mb-px ${
                      activeTab === tab.id
                        ? 'text-[#f0b429] border-[#f0b429]'
                        : 'text-[#e2e2e2]/40 border-transparent hover:text-[#e2e2e2]/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="flex-1 overflow-y-auto">
                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <div
                      className={htmlProps}
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />

                    {/* Shipping */}
                    <div className="border-t border-[#f0b429]/20 pt-4">
                      <h3 className="font-bold uppercase text-sm mb-3 text-[#e2e2e2]/60 font-sans">Shipping</h3>
                      <div className="flex gap-3">
                        {(['domestic', 'international'] as const).map((type) => (
                          <button
                            key={type}
                            onClick={() => setShippingType(type)}
                            className={`flex-1 py-3 px-4 font-bold uppercase text-sm transition-[background-color,color,border-color] duration-200 border font-sans ${
                              shippingType === type
                                ? 'bg-[#f0b429] text-[#1a1b2a] border-[#f0b429]'
                                : 'bg-transparent text-[#e2e2e2]/70 border-[#f0b429]/30 hover:border-[#f0b429]/70'
                            }`}
                          >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="border-t border-[#f0b429]/20 pt-4">
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

                    {/* Add to Cart */}
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-[#f0b429] text-[#1a1b2a] py-4 font-black uppercase tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 font-sans disabled:opacity-40 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>

                    <p className="text-xs text-[#e2e2e2]/30 text-center font-sans">
                      SKU: {product.paypalItemCode}
                    </p>
                  </div>
                )}

                {activeTab === 'includes' && product.includes && (
                  <div
                    className={htmlProps}
                    dangerouslySetInnerHTML={{ __html: product.includes }}
                  />
                )}

                {activeTab === 'scenarios' && product.scenarios && (
                  <ScenarioTable scenarios={product.scenarios} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
