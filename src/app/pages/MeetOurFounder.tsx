import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function MeetOurFounder() {
  return (
    <main className="min-w-0 overflow-x-hidden">
      <section className="relative flex h-screen min-h-[100dvh] w-full min-w-0 items-center justify-center overflow-x-hidden">
        <div className="absolute inset-0 isolate">
          <ImageWithFallback
            src="/images/LambFamily.webp"
            alt="Thatcher Lamb and family"
            className="h-full w-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backgroundColor: 'rgba(201, 168, 76, 0.4)', mixBlendMode: 'multiply' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-28 text-center sm:px-8 sm:pt-32">
          <h1
            className="break-words text-4xl tracking-wide sm:text-5xl md:text-7xl lg:text-8xl"
            style={{ fontWeight: 900, lineHeight: 1.1 }}
          >
            Meet Our <span style={{ color: '#C9A84C' }}>Founder</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.25em] text-white/90 sm:text-xs md:text-sm">
            Thatcher Lamb — Founder, Prodigy Construction
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="mx-auto w-full min-w-0 max-w-[500px] lg:col-span-6 lg:mx-0 lg:max-w-none">
              <div className="grid min-h-0 grid-cols-1 gap-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-stretch">
                <div className="hidden min-h-0 flex-col gap-2 lg:flex lg:h-[600px]">
                  {[
                    { src: '/images/Thatcher1.png', alt: 'Thatcher Lamb' },
                    { src: '/images/Thatcher2.png', alt: 'Thatcher Lamb portrait two' },
                    { src: '/images/Thatcher3.png', alt: 'Thatcher Lamb portrait three' },
                  ].map((item) => (
                    <div key={item.src} className="min-h-0 flex-1 basis-0 overflow-hidden">
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="min-h-0 w-full overflow-hidden lg:h-[600px]">
                  <img
                    src="/images/LambFamily.webp"
                    alt="Thatcher Lamb and family"
                    className="h-auto w-full max-w-full object-cover object-center lg:h-full lg:min-h-0 lg:w-full"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-0 text-center lg:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C] sm:text-sm">THE FOUNDER</p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Thatcher Lamb
              </h2>
              <hr className="mx-auto mt-8 max-w-md border-0 border-t border-[#C9A84C]" />
              <p className="mt-10 text-left text-base leading-relaxed text-foreground/80 sm:text-lg">
                Thatcher Lamb is the founder of Prodigy Construction. What started as a 14 year old boy running a framing
                crew for his dad&apos;s company has grown into one of Utah&apos;s most capable and trusted construction
                firms — delivering custom homes, large-scale commercial builds, and government contracts with the same
                uncompromising standard across all of it.
              </p>
              <p className="mt-6 text-left text-base leading-relaxed text-foreground/80 sm:text-lg">
                Behind every nail driven and every contract signed is the family that makes it mean something. Thatcher&apos;s
                wife and kids aren&apos;t just his motivation. They&apos;re the reason he shows up, the reason he pushes,
                and the reason every project gets his absolute best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C] sm:text-sm">THE STORY</p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                The Story Behind the Builder
              </h2>
              <hr className="mx-auto mt-8 max-w-md border-0 border-t border-[#C9A84C] lg:mx-0" />
              <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-foreground/80 sm:text-lg">
                <p>
                  Before there was a company, there was a hammer. Thatcher got his first job at 14 — not sweeping floors,
                  but running a framing crew. The crew was older. They weren&apos;t happy about it. He cried more than
                  he&apos;d like to admit, felt unqualified every single day, and never told his dad any of it. He just kept
                  his head down and kept working.
                </p>
                <p>
                  His dad took him to the hardware store before his first day and told him if he was going to be the boss,
                  he needed to look like it and act like it. They picked out tools. When they got to the hammers, Thatcher
                  knew exactly what he wanted — wooden handle for speed, curved grip for cold weather, 21 oz for power, flat
                  claw for pulling nails clean. He watched his dad set a 6x6 post in three swings with a hammer like that. He
                  never forgot it.
                </p>
                <p>
                  That hammer has been with him on every job since. He&apos;s broken countless others. That one never quit.
                  It&apos;s mounted on the wall of his living room now — retired, but not forgotten.
                </p>
                <p>
                  His dad passed away before Thatcher got his contractor&apos;s license. Before he could show him it had
                  paid off. Thatcher started Prodigy shortly after, doing remodels and additions. Then a commercial contract
                  changed everything — he spent years traveling the country building wastewater treatment facilities for oil
                  rigs and mines across six states. That work opened doors to the State of Utah. The rest is what you see
                  here.
                </p>
              </div>
            </div>
            <div className="order-1 min-w-0 lg:order-2">
              <img
                src="/images/ToThatcher.png"
                alt="Thatcher Lamb"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
