import { useMemo, useState } from 'react';
import { Link } from 'react-router';

/** Lightbox order: shower, stairs, kitchen, living room */
const galleryImages = [
  '/images/Cottonwood_V1.1.webp',
  '/images/Cottonwood_V4.1.webp',
  '/images/Cottonwood_V2.1.webp',
  '/images/Cottonwood_V3.1.webp',
];

const galleryAlts = [
  'Cottonwood View shower',
  'Cottonwood View stairs',
  'Cottonwood View kitchen',
  'Cottonwood View living room',
];

export function ProjectCottonwood() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = useMemo(() => {
    if (activeIndex === null) return null;
    return galleryImages[activeIndex];
  }, [activeIndex]);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  return (
    <main className="bg-background text-foreground">
      <section className="pb-16 pt-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <Link
          to="/work"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Our Work
        </Link>

        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/images/Cottonwood_V5.3.webp"
            alt="Cottonwood View hero"
            className="h-[450px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h1 className="absolute bottom-0 left-0 p-6 text-5xl font-bold tracking-tight text-white sm:p-8 sm:text-6xl">
            Cottonwood View
          </h1>
        </div>

        <div className="mt-8">
          <div className="h-px w-full" style={{ backgroundColor: '#C9A84C' }} />
          <div className="px-4 py-5" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center text-xs font-semibold uppercase tracking-wider sm:text-sm">
              <span className="text-muted-foreground">
                Location: <span className="text-white">Salt Lake County</span>
              </span>
              <span className="text-muted-foreground" aria-hidden="true">
                |
              </span>
              <span className="text-muted-foreground">
                Type: <span className="text-white">Remodel</span>
              </span>
              <span className="text-muted-foreground" aria-hidden="true">
                |
              </span>
              <span className="text-muted-foreground">
                Status: <span className="text-white">Completed</span>
              </span>
            </div>
          </div>
          <div className="h-px w-full" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <div className="mt-10 grid w-full grid-cols-3 gap-1">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className="block h-[220px] w-full overflow-hidden border-0 bg-transparent p-0 text-left"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={image}
                alt={galleryAlts[index]}
                loading="lazy"
                className="h-[220px] w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
              />
            </button>
          ))}
        </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            className="absolute right-6 top-6 rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            onClick={() => setActiveIndex(null)}
          >
            Close
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-4 rounded-full border border-white/30 p-3 text-white transition hover:bg-white/10 sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-4 rounded-full border border-white/30 p-3 text-white transition hover:bg-white/10 sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <img
            src={activeImage}
            alt="Cottonwood View lightbox preview"
            className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
