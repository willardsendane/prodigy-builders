import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://i.imgur.com/QDkNYVc.jpeg"
          alt="Architectural blueprints and luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <h1 className="tracking-wide text-[3.375rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px] mb-6" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Intentionally Designed.<br /><span style={{ color: '#c9a84c' }}>Meticulously Built.</span>
        </h1>
        <p className="text-[0.9rem] md:text-xl text-foreground/80 max-w-2xl mx-auto tracking-wide">
          A company founded not just to build homes, but to build something that lasts.
        </p>
      </div>
    </section>
  );
}