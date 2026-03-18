import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { ProductCarousel } from './components/products/ProductCarousel';
import { ProductGrid } from './components/products/ProductGrid';
import { ProductModal } from './components/products/ProductModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { PartsSection } from './components/parts/PartsSection';
import { DownloadsSection } from './components/downloads/DownloadsSection';
import { AccountPage } from './components/account/AccountPage';
import { useCartSync } from './hooks/useCartSync';
import type { Product } from './types';
import { products } from './data/products';

function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProducts = products.filter((p) => p.featured);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-[var(--c-bg)]">
      <Header />

      <main className="pt-20">
        <Hero />

        {/* Stats Strip */}
        {(() => {
          const bfpOnly = products.filter((p) => p.category === 'BFP');
          const totalScenarios = bfpOnly.reduce((sum, p) => sum + (p.scenarios?.length ?? 0), 0);
          const yearsActive = new Date().getFullYear() - 1998;
          const stats = [
            { value: `${yearsActive}+`, label: 'Years Publishing' },
            { value: String(bfpOnly.length), label: 'BFP Modules' },
            { value: `${totalScenarios}+`, label: 'Scenarios' },
          ];
          return (
            <div className="bg-[var(--c-deep)] border-b border-[#f0b429]/20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="grid grid-cols-3 divide-x divide-[#f0b429]/20">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center py-8 gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-[#f0b429] tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {value}
                      </span>
                      <span className="text-xs sm:text-sm uppercase tracking-widest text-[var(--c-text)]/40 font-sans">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {featuredProducts.length > 0 && (
          <ProductCarousel products={featuredProducts} onProductClick={handleProductClick} />
        )}

        <ProductGrid products={products} onProductClick={handleProductClick} />

        <PartsSection />

        <DownloadsSection />

        {/* About Section */}
        <section id="about" className="bg-[var(--c-surface)] text-[var(--c-text)] py-20 border-t border-[#f0b429]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-12 text-center">
              Contact Bounding Fire Productions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left column — Contact Us */}
              <div id="contact" className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl uppercase text-[#f0b429] mb-4 tracking-wide">Get in Touch</h3>
                <p className="text-lg text-[var(--c-text)]/70 leading-relaxed mb-8 font-sans">
                  Questions about our products? Want to discuss custom orders?
                  <br />
                  We'd love to hear from you.
                </p>
                <a
                  href="mailto:info@boundingfire.com"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#f0b429] text-[#1a1b2a] font-black uppercase tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 border-2 border-[#f0b429]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                  Contact Us
                </a>
              </div>

              {/* Right column — Facebook */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl uppercase text-[#f0b429] mb-4 tracking-wide">Join Us on Facebook</h3>
                <p className="text-lg text-[var(--c-text)]/70 leading-relaxed mb-8 font-sans">
                  Connect with the Bounding Fire community. Share scenarios,
                  ask questions, and stay up to date with the latest news and releases.
                </p>
                <a
                  href="https://www.facebook.com/groups/boundingfire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#1877f2] text-white font-black uppercase tracking-wider hover:bg-[#1877f2]/80 transition-[background-color] duration-200 border-2 border-[#1877f2]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Visit Our Group
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--c-surface)] text-[var(--c-text)] py-12 border-t border-[#f0b429]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl uppercase text-[#f0b429]">
              Bounding Fire Productions
            </h3>
            <p className="text-sm text-[var(--c-text)]/40 uppercase tracking-wider font-sans">
              Premium Gaming Products
            </p>
            <p className="text-xs text-[var(--c-text)]/25 font-sans">
              © 2026 Bounding Fire Productions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <CartDrawer />
    </div>
  );
}

function App() {
  // Mount cart sync once at app level (handles sign-in merge + ongoing DB sync)
  useCartSync();

  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<StorePage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
}

export default App;
