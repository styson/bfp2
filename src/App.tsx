import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { ProductCarousel } from './components/products/ProductCarousel';
import { ProductGrid } from './components/products/ProductGrid';
import { ProductModal } from './components/products/ProductModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { PartsSection } from './components/parts/PartsSection';
import { DownloadsSection } from './components/downloads/DownloadsSection';
import type { Product } from './types';
import { products } from './data/products';

function App() {
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
    <div className="min-h-screen bg-[#1a1b2a]">
      <Header />

      <main className="pt-20">
        <Hero />

        {featuredProducts.length > 0 && (
          <ProductCarousel products={featuredProducts} onProductClick={handleProductClick} />
        )}

        <ProductGrid products={products} onProductClick={handleProductClick} />

        <PartsSection />

        <DownloadsSection />

        {/* About Section */}
        <section id="about" className="bg-[#13141f] text-[#e2e2e2] py-20 border-t border-[#f0b429]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-8">
              About Bounding Fire Productions
            </h2>
            <p className="text-lg text-[#e2e2e2]/70 leading-relaxed mb-6 font-sans">
              We're dedicated to creating premium content that elevates
              your tactical gaming experience. Our modules, counters, and boards are meticulously
              crafted with attention to historical detail and gameplay balance.
            </p>
            <p className="text-lg text-[#e2e2e2]/70 leading-relaxed font-sans">
              Every product is designed by board gaming enthusiasts, ensuring
              compatibility and quality that exceeds expectations.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[#1a1b2a] py-20 border-t border-[#f0b429]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-[#e2e2e2]/70 leading-relaxed mb-8 font-sans">
              Questions about our products? Want to discuss custom orders?
              <br />
              We'd love to hear from you.
            </p>
            <a
              href="mailto:info@boundingfire.com"
              className="inline-block px-10 py-4 bg-[#f0b429] text-[#1a1b2a] font-black uppercase tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 border-2 border-[#f0b429]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#13141f] text-[#e2e2e2] py-12 border-t border-[#f0b429]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl uppercase text-[#f0b429]">
              Bounding Fire Productions
            </h3>
            <p className="text-sm text-[#e2e2e2]/40 uppercase tracking-wider font-sans">
              Premium Gaming Products
            </p>
            <p className="text-xs text-[#e2e2e2]/25 font-sans">
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

export default App;
