export function FooterCTA() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl mb-12 tracking-tight font-['Blair_ITC']" style={{ fontWeight: 900 }}>
          Ready to build something extraordinary?
        </h2>
        <button className="px-12 py-5 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 tracking-wider text-sm">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
}