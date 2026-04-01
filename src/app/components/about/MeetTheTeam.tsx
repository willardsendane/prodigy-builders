export function MeetTheTeam() {
  return (
    <section className="bg-[#0d0d0d] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-accent text-sm tracking-[0.3em] mb-16 text-center">THE PEOPLE BEHIND THE WORK</p>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[500px] w-full lg:h-[500px]">
            <img
              src="/images/LambFam.webp"
              alt="Thatcher Lamb and family"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-center px-0 py-12 lg:px-12 lg:py-0 xl:px-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] sm:text-sm">Founder</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Thatcher Lamb
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Thatcher founded Prodigy Builders with a simple belief — that every family deserves a home built with
              the same care and precision as the finest custom builds in the country. What started as a single crew has
              grown into one of Utah&apos;s most trusted builders, from custom homes to government contracts.
            </p>
            <hr className="mt-8 max-w-xl border-0 border-t border-[#C9A84C]" />
            <p className="mt-6 text-sm tracking-wide text-gray-400 sm:text-base">Builder. Father. Founder.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
