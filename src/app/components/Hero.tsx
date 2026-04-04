import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src="/(2)hero12s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1
          className="mb-6 text-[3.375rem] tracking-wide sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px]"
          style={{ fontWeight: 900, lineHeight: 1.1 }}
        >
          Built at Any Scale.
        </h1>
        <p className="mb-12 max-w-2xl mx-auto text-[0.9rem] tracking-wide text-foreground/80 md:text-xl">
          The craftsmanship of a custom builder with the proven capability of a commercial contractor.
        </p>
        <div className="flex flex-col items-center gap-3">
          <Link
            to="/contact"
            className="inline-block rounded-none border-2 border-transparent bg-[#C9A84C] px-10 py-4 text-sm font-bold uppercase tracking-wider text-[#1a1a1a] transition-all duration-200 hover:bg-transparent hover:border-[#C9A84C] hover:text-[#C9A84C]"
          >
            START YOUR BUILD
          </Link>
          <Link to="/work" className="text-sm text-accent transition-colors hover:text-accent-foreground">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
