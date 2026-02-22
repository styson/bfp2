import heroBg from '../../images/bg1.jpg';

export const Hero = () => {
  return (
    <section
      className="relative text-white min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a1b2a]/80" />
      {/* Gold vignette at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1b2a] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl uppercase leading-none text-[#f0b429]">
          Bounding Fire Productions
        </h1>

        <p className="text-lg sm:text-xl text-[#e2e2e2]/80 max-w-2xl mx-auto leading-relaxed font-sans">
          Premium tactical gaming modules, counters, and boards designed for the
          ultimate war game experience
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#products"
            className="px-10 py-4 bg-[#f0b429] text-[#1a1b2a] font-black uppercase tracking-wider hover:bg-[#f0b429]/80 transition-[background-color] duration-200 border-2 border-[#f0b429]"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="px-10 py-4 bg-transparent text-[#e2e2e2] font-black uppercase tracking-wider hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200 border-2 border-[#e2e2e2]/40"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
