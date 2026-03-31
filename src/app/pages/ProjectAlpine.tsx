import { useMemo, useState } from 'react';
import { Link } from 'react-router';

const galleryImages = [
  '/images/Alpine_V1.1.png',
  '/images/Alpine_V2.1.png',
  '/images/Alpine_V3.1.png',
  '/images/Alpine_V4.1.png',
  '/images/Alpine_V5.1.png',
  '/images/Alpine_V6.png',
];

export function ProjectAlpine() {
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
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">
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
          <img src="/images/Alpine_V1.png" alt="Alpine Manor hero" className="h-[560px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h1 className="absolute bottom-0 left-0 p-6 text-5xl font-bold tracking-tight text-white sm:p-8 sm:text-6xl">
            Alpine Manor
          </h1>
        </div>

        <div className="mt-8">
          <div className="h-px w-full" style={{ backgroundColor: '#C9A84C' }} />
          <div className="px-4 py-5" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center text-xs font-semibold uppercase tracking-wider sm:text-sm">
              <span className="text-muted-foreground">
                Location: <span className="text-white">Alpine, UT</span>
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

        <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-card text-left"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={image}
                alt={`Alpine Manor gallery image ${index + 1}`}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
              />
            </button>
          ))}
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
            alt="Alpine Manor lightbox preview"
            className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
