export function ContactHero() {
  return (
    <section className="relative py-32 w-full flex items-center justify-center bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="tracking-wide mb-6 text-[3.375rem] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px]" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Let&apos;s Build Something Extraordinary
        </h1>
        <p className="text-[0.9rem] md:text-xl text-foreground/80 max-w-2xl mx-auto tracking-wide">
          Tell us about your project. We&apos;re ready to bring your vision to life.
        </p>
      </div>
    </section>
  );
}
