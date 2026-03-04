export function ContactHero() {
  return (
    <section className="relative py-32 w-full flex items-center justify-center bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="tracking-wide mb-6 font-['Blair_ITC'] text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Let&apos;s Build Something Extraordinary
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto tracking-wide">
          Tell us about your project. We&apos;re ready to bring your vision to life.
        </p>
      </div>
    </section>
  );
}
