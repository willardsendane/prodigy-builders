import { Link } from 'react-router';

const customHomes = [
  { name: 'Alpine Manor', imageUrl: '/images/Alpine_V1.png', href: '/work/alpine' },
  { name: 'Cottonwood View', imageUrl: '/images/Cottonwood_V1.png', href: '/work/cottonwood' },
  { name: 'Foremaster Ridge', imageUrl: '/images/Foremaster_V5.png', href: '/work/foremaster' },
  { name: 'Hideout', imageUrl: '/images/Hideout_V1.png', href: '/work/hideout' },
  { name: 'Holladay', imageUrl: '/images/Holladay_V1.png', href: '/work/holladay' },
  { name: 'Hurricane Retreat', imageUrl: '/images/Hurricane_V1.png', href: '/work/hurricane' },
  { name: 'Traverse Outlook', imageUrl: '/images/TraverseOutlook_V1.png', href: '/work/traverse' },
];

export function OurWork() {
  return (
    <main className="bg-background">
      <section className="w-full pb-16 pt-28">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/images/Moms_V1.png"
            alt="Berkshire Villa featured build hero"
            className="h-[500px] w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.92), transparent)',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent)',
            }}
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-6 lg:px-12 lg:py-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#C9A84C] sm:text-sm">FEATURED PROJECT</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Berkshire Villa
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              Designed to turn heads. Built to stand for generations.
            </p>
          </div>
        </div>
        <div className="w-full px-6 py-8 lg:px-12">
          <div className="h-px w-full" style={{ backgroundColor: 'rgba(201, 168, 76, 0.4)' }} aria-hidden />
        </div>
        <div className="bg-[#0a0a0a] px-6 pb-8 lg:px-12 lg:pb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-[#C9A84C] sm:text-sm">EXTERIOR GALLERY</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/images/Moms_V3.png"
              alt="Berkshire Villa exterior angle two"
              className="h-auto w-full rounded-xl sm:h-[420px] sm:object-cover"
            />
            <img
              src="/images/Moms_V4.png"
              alt="Berkshire Villa exterior angle three"
              className="h-auto w-full rounded-xl sm:h-[420px] sm:object-cover"
            />
          </div>
        </div>
        <div className="matterport-wrapper mx-auto mt-6 w-[80%] max-w-full rounded-xl border border-border">
          <iframe
            src="https://my.matterport.com/show/?m=phQb9AB4iYo&brand=0&mls=1&mt=0&search=0&qs=1"
            title="Berkshire Villa Matterport walkthrough"
            allowFullScreen
          />
        </div>
      </section>

      <section className="w-full py-16">
        <h2 className="px-6 text-3xl font-bold tracking-tight lg:px-12">Custom Homes</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-12 xl:grid-cols-3">
          {customHomes.map((project) => (
            <Link
              key={project.name}
              to={project.href}
              className="relative z-10 block cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-inherit no-underline transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <img
                src={project.imageUrl}
                alt={`${project.name} project`}
                draggable={false}
                className="pointer-events-none h-56 w-full select-none object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full py-16">
        <div className="h-px w-full bg-border" />
        <div className="mt-8 grid grid-cols-1 items-center gap-8 px-6 lg:grid-cols-[2fr_3fr] lg:px-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight">Currently Building</h2>
            <span
              className="mt-6 inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-black"
              style={{ backgroundColor: '#C9A84C' }}
            >
              Now Building
            </span>
            <h3 className="mt-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">Rose Canyon</h3>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
              This build is currently underway. Explore the space in real time with our live 3D walkthrough.
            </p>
          </div>
          <div className="min-w-0">
            <iframe
              src="https://my.matterport.com/show/?m=f8WdXb5uWmq&brand=0&mls=1&mt=0&search=0&qs=1"
              title="Rose Canyon Matterport walkthrough"
              className="block h-[400px] w-full rounded-xl border border-border"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section
        id="government-commercial"
        className="w-full scroll-mt-28 px-6 py-16 md:px-12 lg:px-20"
      >
        <h2 className="text-3xl font-bold tracking-tight">Government &amp; Commercial</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src="/images/Prison_V6.jpg"
              alt="Utah State Correctional Facility hero"
              className="h-56 w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-2 p-5">
              <img src="/images/Prison_V1.1.png" alt="Utah State Correctional Facility exterior one" className="h-24 w-full rounded-md object-cover" />
              <img src="/images/Prison_V3.png" alt="Utah State Correctional Facility exterior two" className="h-24 w-full rounded-md object-cover" />
              <img src="/images/Prison_V5.png" alt="Utah State Correctional Facility exterior three" className="h-24 w-full rounded-md object-cover" />
              <img src="/images/Prison_V2.1.jpg" alt="Utah State Correctional Facility exterior four" className="h-24 w-full rounded-md object-cover" />
            </div>
            <div className="p-5">
              <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Government Contracted
              </span>
              <h3 className="mt-3 text-xl font-semibold">Utah State Correctional Facility</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                A government-contracted build held to the highest compliance and security standards. Due to the nature
                of this facility, interior photography was not permitted -- but we&apos;re proud to share what we can.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative h-56 w-full">
              <img
                src="/images/courthouse3.jpeg"
                alt="West Jordan Courthouse hero"
                className="h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
                aria-hidden
              />
            </div>
            <div className="grid grid-cols-2 gap-2 p-5">
              <img src="/images/courthouse1.jpeg" alt="West Jordan Courthouse gallery one" className="h-48 w-full rounded-md object-cover" />
              <img src="/images/courthouse6.jpeg" alt="West Jordan Courthouse gallery two" className="h-48 w-full rounded-md object-cover" />
            </div>
            <div className="p-5">
              <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Government Contracted
              </span>
              <h3 className="mt-3 text-xl font-semibold">West Jordan Courthouse</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                A government-contracted courthouse build delivered to the highest standards of compliance, craftsmanship,
                and durability.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
