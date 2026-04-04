const STATS = [
  { headline: '12+', label: 'Years Building' },
  { headline: '100+', label: 'Project Delivered' },
  { headline: 'State Contracted', label: 'Builder' },
  { headline: 'Award-Winning', label: 'Craftsmanship' },
] as const;

function statCellBorderClass(index: number) {
  switch (index) {
    case 0:
      return 'max-md:border-r max-md:border-b max-md:border-[#C9A84C] md:border-0';
    case 1:
      return 'max-md:border-b max-md:border-[#C9A84C] md:border-0 md:border-l md:border-[#C9A84C]';
    case 2:
      return 'max-md:border-r max-md:border-[#C9A84C] md:border-0 md:border-l md:border-[#C9A84C]';
    default:
      return 'md:border-0 md:border-l md:border-[#C9A84C]';
  }
}

export function OurStory() {
  return (
    <section className="w-full min-w-0 overflow-x-hidden bg-[#111111] py-16">
      <div className="w-full min-w-0 max-w-full px-6 lg:px-12">
        <div className="grid w-full min-w-0 max-w-full grid-cols-2 gap-0 max-md:items-stretch md:flex md:flex-row md:gap-0">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex min-h-0 min-w-0 w-full flex-col items-center justify-center gap-1 px-3 py-4 text-center max-md:h-full md:flex-1 md:gap-2 md:px-4 md:py-4 md:h-auto ${statCellBorderClass(index)}`}
            >
              <p className="break-words text-2xl font-bold leading-tight tracking-tight text-white sm:max-md:text-3xl md:text-2xl lg:text-3xl">
                {stat.headline}
              </p>
              <p className="break-words text-xs font-medium uppercase leading-snug tracking-wider text-gray-500 sm:max-md:text-sm md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
