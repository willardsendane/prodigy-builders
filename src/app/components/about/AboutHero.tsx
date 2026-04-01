import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutHero() {
  return (
    <section className="relative flex h-screen w-full min-w-0 items-center justify-center overflow-x-hidden">
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
      <div className="relative z-10 mx-auto min-w-0 w-full max-w-7xl px-6 text-center">
        <h1 className="mb-6 break-words px-4 text-[3.375rem] tracking-wide sm:px-6 sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px]" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Intentionally Designed.<br /><span style={{ color: '#c9a84c' }}>Meticulously Built.</span>
        </h1>
        <p className="text-[0.9rem] md:text-xl text-foreground/80 max-w-2xl mx-auto tracking-wide">
          A company founded not just to build homes, but to build something that lasts.
        </p>
      </div>
    </section>
  );
}