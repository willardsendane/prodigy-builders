import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutHero() {
  return (
    <section className="relative flex h-screen w-full min-w-0 items-start justify-center overflow-x-hidden">
      <div className="absolute inset-0 isolate">
        <ImageWithFallback
          src="/images/AboutHero4.png"
          alt="Architectural blueprints and luxury home"
          className="h-full w-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: '#C9A84C', mixBlendMode: 'multiply', opacity: 0.4 }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} aria-hidden />
      </div>

      <div className="relative z-10 mx-auto min-w-0 w-full max-w-7xl px-6 pt-56 text-center">
        <h1 className="mb-6 break-words px-4 text-4xl tracking-wide sm:px-6 sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px]" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          <span style={{ color: '#c9a84c' }}>Proven</span> at Every Scale
        </h1>
        <p className="mt-10 max-w-2xl text-[0.9rem] tracking-wide text-foreground/80 md:text-xl mx-auto">
          Custom homes. Commercial builds. Government contracts. Every one built to the same uncompromising standard.
        </p>
      </div>
    </section>
  );
}
