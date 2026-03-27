const customHomes = [
  { name: 'Alpine', imageUrl: '/images/Alpine_V1.png' },
  { name: 'Cottonwood', imageUrl: '/images/Cottonwood_V1.png' },
  { name: 'Foremaster', imageUrl: '/images/Foremaster_V1.png' },
  { name: 'Hideout', imageUrl: '/images/Hideout_V1.png' },
  { name: 'Holladay', imageUrl: '/images/Holladay_V1.png' },
  { name: 'Hurricane', imageUrl: '/images/Hurricane_V1.png' },
  { name: 'Traverse Outlook', imageUrl: '/images/TraverseOutlook_V1.png' },
];

export function OurWork() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/images/Moms_V1.png"
            alt="Berkshire Villa featured build hero"
            className="h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <span
              className="inline-flex rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-black"
              style={{ backgroundColor: '#C9A84C' }}
            >
              Utah Home Show Featured Build
            </span>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Berkshire Villa
            </h1>
            <p className="mt-3 max-w-3xl text-base text-white/90 sm:text-lg">
              As seen at the Utah Home Show, one of Utah&apos;s most celebrated custom builds.
            </p>
            <div className="mt-5 h-[3px] w-[220px]" style={{ backgroundColor: '#C9A84C' }} />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img src="/images/Moms_V3.png" alt="Berkshire Villa exterior angle two" className="h-[420px] w-full rounded-xl object-cover" />
          <img src="/images/Moms_V4.png" alt="Berkshire Villa exterior angle three" className="h-[420px] w-full rounded-xl object-cover" />
        </div>
        <div className="matterport-wrapper mt-6 rounded-xl border border-border">
          <iframe
            src="https://my.matterport.com/show/?m=phQb9AB4iYo&brand=0&mls=1&mt=0&search=0&qs=1"
            title="Berkshire Villa Matterport walkthrough"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Custom Homes</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {customHomes.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <img src={project.imageUrl} alt={`${project.name} project`} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Project description coming soon.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Now Building
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Rose Port</h2>
        <iframe
          src="https://my.matterport.com/show/?m=f8WdXb5uWmq&"
          title="Rose Port Matterport walkthrough"
          className="mt-6 w-full rounded-xl border border-border"
          style={{ height: '500px' }}
          allowFullScreen
        />
        <p className="mt-4 text-base text-muted-foreground">
          Take a live 3D walkthrough of our latest build in progress.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
            <div className="flex h-56 items-center justify-center bg-muted text-sm text-muted-foreground">
              Placeholder image
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">More Coming Soon</h3>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
