const TESTIMONIALS = [
  {
    name: 'Dane W.',
    quote: 'Thatcher was an absolute pleasure to work with. Highly recommend!',
  },
  {
    name: 'Cash B.',
    quote: "I'll be using Prodigy for my next project, they did a great job and were notably easy to communicate with.",
  },
  {
    name: 'Brant T.',
    quote: 'I have worked with Thatcher both personally and professionally, stand up guys who does great work.',
  },
  {
    name: 'Marie W.',
    quote: 'I recommend Prodigy to all of my friends! I am very impressed by their work and standards.',
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-[#0f0f0f] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <article
              key={index}
              className="bg-[#1a1a1a] border border-white/10 p-8 md:p-10 flex flex-col"
            >
              <span
                className="font-sans text-5xl md:text-6xl leading-none mb-5 select-none font-light text-[#C9A84C]"
                aria-hidden
              >
                “
              </span>
              <blockquote className="flex-1">
                <p className="text-white italic text-lg leading-relaxed">{t.quote}</p>
              </blockquote>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] font-medium text-[#C9A84C]">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
