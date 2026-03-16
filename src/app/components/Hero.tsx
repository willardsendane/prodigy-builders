import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imageUrl}
          alt="Luxury custom home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="tracking-wide mb-6 font-['Blair_ITC'] text-[3.375rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px]" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Built at Any Scale.
        </h1>
        <p className="text-[0.9rem] md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto tracking-wide">
          The craftsmanship of a custom builder. The capability of a commercial contractor.
        </p>
        <div className="flex flex-col items-center gap-3">
          <button className="px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 tracking-wider text-sm">
            START YOUR BUILD
          </button>
          <a
            href="/projects"
            className="text-sm text-accent underline underline-offset-4 hover:text-accent-foreground transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}