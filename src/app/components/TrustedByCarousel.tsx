const LOGO_FILES = [
  'ASD1.png',
  'Corrections1.png',
  'Ecovap1.png',
  'Jordan1.png',
  'Landmark1.png',
  'Magna1.png',
  'Municipal1.png',
  'SLC1.png',
  'Summit1.png',
  'UDOT1.png',
  'UTA1.png',
] as const;

function logoAlt(filename: string): string {
  const base = filename.replace(/\.png$/i, '').replace(/\d+$/, '');
  const labels: Record<string, string> = {
    ASD: 'ASD',
    Corrections: 'Utah Department of Corrections',
    Ecovap: 'Ecovap',
    Jordan: 'Jordan',
    Landmark: 'Landmark',
    Magna: 'Magna',
    Municipal: 'Municipal partner',
    SLC: 'Salt Lake City',
    Summit: 'Summit',
    UDOT: 'UDOT',
    UTA: 'UTA',
  };
  return labels[base] ?? base;
}

export function TrustedByCarousel() {
  const strip = (suffix: string) =>
    LOGO_FILES.map((file) => (
      <img
        key={`${file}-${suffix}`}
        src={`/Partners/${file}`}
        alt={logoAlt(file)}
        loading="eager"
        className="h-[120px] w-auto min-w-[180px] shrink-0 object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    ));

  return (
    <section
      className="min-w-0 overflow-hidden border-y border-white/5 bg-[#141414] py-16 md:py-20"
      aria-label="Trusted by"
    >
      <div className="container mx-auto min-w-0 max-w-full px-6 lg:px-12">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.3em] text-[#C9A84C] md:mb-12">
          Trusted By
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="trusted-by-marquee-track gap-[80px]">
          {strip('a')}
          {strip('b')}
        </div>
      </div>
    </section>
  );
}
