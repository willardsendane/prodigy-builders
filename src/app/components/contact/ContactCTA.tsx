export function ContactCTA() {
  return (
    <section className="bg-[#0a0a0a] py-20 border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl mb-8 tracking-tight" style={{ fontWeight: 900 }}>
          Prefer to reach out directly?
        </h2>
        <p className="text-[0.9rem] md:text-lg text-foreground/80 mb-8 max-w-xl mx-auto tracking-wide">
          We&apos;re always here to discuss your project. Call or email us anytime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <a
            href="tel:8016696228"
            className="text-accent hover:text-accent/80 transition-colors text-lg tracking-wide"
          >
            (801) 669-6228
          </a>
          <a
            href="mailto:thatcher@prodigybuilders.net"
            className="text-accent hover:text-accent/80 transition-colors text-lg tracking-wide"
          >
            thatcher@prodigybuilders.net
          </a>
        </div>
      </div>
    </section>
  );
}
