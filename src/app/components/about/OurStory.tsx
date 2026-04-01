const STATS = [
  { headline: '12+', label: 'Years Building' },
  { headline: '100+', label: 'Project Delivered' },
  { headline: 'State Contracted', label: 'Builder' },
  { headline: 'Award-Winning', label: 'Craftsmanship' },
] as const;

export function OurStory() {
  return (
    <section className="w-full min-w-0 overflow-x-hidden bg-[#111111] py-16">
      <div className="w-full min-w-0 max-w-full px-6 lg:px-12">
        <div className="flex w-full min-w-0 max-w-full flex-row">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-2 px-2 py-2 text-center sm:px-4 sm:py-4 ${
                index > 0 ? 'border-l border-[#C9A84C]' : ''
              }`}
            >
              <p className="break-words text-base font-bold leading-tight tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl">
                {stat.headline}
              </p>
              <p className="break-words text-[0.65rem] font-medium uppercase leading-snug tracking-wider text-gray-500 sm:text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
