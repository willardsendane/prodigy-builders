const customHomes = [
  { name: 'Alpine Manor', imageUrl: '/images/Alpine_V1.png', href: '/work/alpine' },
  { name: 'Cottonwood View', imageUrl: '/images/Cottonwood_V1.png', href: '/work/cottonwood' },
  { name: 'Foremaster Ridge', imageUrl: '/images/Foremaster_V5.png', href: '/work/foremaster' },
  { name: 'Hideout', imageUrl: '/images/Hideout_V1.png', href: '/work/hideout' },
  { name: 'Holladay', imageUrl: '/images/Holladay_V1.png', href: '/work/holladay' },
  { name: 'Hurricane Retreat', imageUrl: '/images/Hurricane_V1.png' },
  { name: 'Traverse Outlook', imageUrl: '/images/TraverseOutlook_V1.png' },
];

export function OurWork() {
  return (
    <main className="bg-background">
      <div className="px-8 lg:px-16">
        <section className="w-full pb-16 pt-28">
          <div
            className="rounded-xl border border-border px-6 py-10 lg:px-12 lg:py-12"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-black sm:text-sm"
              style={{ backgroundColor: '#C9A84C' }}
            >
              A Prodigy Original
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Berkshire Villa
            </h1>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
              Designed to turn heads. Built to stand for generations.
            </p>
            <div className="mt-6 h-px max-w-md" style={{ backgroundColor: '#C9A84C' }} />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/images/Moms_V3.png"
              alt="Berkshire Villa exterior — left perspective"
              className="h-[300px] w-full rounded-xl object-cover object-[left_center]"
            />
            <img
              src="/images/Moms_V4.png"
              alt="Berkshire Villa exterior — right perspective"
              className="h-[300px] w-full rounded-xl object-cover object-[right_center]"
            />
          </div>
          <div className="mt-6 px-[80px]">
            <iframe
              src="https://my.matterport.com/show/?m=phQb9AB4iYo"
              title="Berkshire Villa Matterport walkthrough"
              className="block w-full rounded-xl border border-border"
              style={{ height: '450px' }}
              allowFullScreen
            />
          </div>
        </section>

        <section className="w-full py-16">
          <h2 className="text-3xl font-bold tracking-tight">Custom Homes</h2>
          <div className="mt-8 grid grid-cols-1 justify-items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {customHomes.map((project, index) => (
              <article
                key={project.name}
                className={
                  index === customHomes.length - 1
                    ? 'overflow-hidden rounded-xl border border-border bg-card md:col-span-2 md:justify-self-center md:w-[calc((100%-1.5rem)/2)] xl:col-span-1 xl:col-start-2 xl:w-full'
                    : 'overflow-hidden rounded-xl border border-border bg-card'
                }
              >
                {project.href ? (
                  <a href={project.href} className="block cursor-pointer">
                    <img src={project.imageUrl} alt={`${project.name} project`} className="h-[200px] w-full object-cover" />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                    </div>
                  </a>
                ) : (
                  <>
                    <img src={project.imageUrl} alt={`${project.name} project`} className="h-[200px] w-full object-cover" />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="w-full py-16">
          <div className="h-px w-full bg-border" />
          <div>
            <h2 className="mt-8 text-3xl font-bold tracking-tight">Currently Building</h2>
            <span
              className="mt-6 inline-flex rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-black"
              style={{ backgroundColor: '#C9A84C' }}
            >
              Now Building
            </span>
            <h3 className="mt-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">Rose Port</h3>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
              This build is currently underway. Explore the space in real time with our live 3D walkthrough below.
            </p>
          </div>
          <div className="mt-6 px-[80px]">
            <iframe
              src="https://my.matterport.com/show/?m=f8WdXb5uWmq&brand=0&mls=1&mt=0&search=0&qs=1"
              title="Rose Port Matterport walkthrough"
              className="block w-full rounded-xl border border-border"
              style={{ height: '400px' }}
              allowFullScreen
            />
          </div>
        </section>

        <section className="w-full py-16">
          <h2 className="text-3xl font-bold tracking-tight">Government &amp; Commercial</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/images/Prison_V6.jpg"
                alt="Utah State Correctional Facility hero"
                className="h-[200px] w-full object-cover"
              />
              <div className="grid grid-cols-2 gap-2 p-5">
                <img src="/images/Prison_V1.1.png" alt="Utah State Correctional Facility exterior one" className="h-[150px] w-full rounded-md object-cover" />
                <img src="/images/Prison_V3.png" alt="Utah State Correctional Facility exterior two" className="h-[150px] w-full rounded-md object-cover" />
                <img src="/images/Prison_V5.png" alt="Utah State Correctional Facility exterior three" className="h-[150px] w-full rounded-md object-cover" />
                <img src="/images/Prison_V2.1.jpg" alt="Utah State Correctional Facility exterior four" className="h-[150px] w-full rounded-md object-cover" />
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
              <div className="flex h-56 items-center justify-center bg-muted text-sm text-muted-foreground">
                Placeholder image
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">More Coming Soon</h3>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
