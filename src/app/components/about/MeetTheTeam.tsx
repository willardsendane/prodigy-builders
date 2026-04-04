export function MeetTheTeam() {
  return (
    <section className="min-w-0 overflow-x-hidden bg-[#0d0d0d] py-32">
      <div className="container mx-auto min-w-0 max-w-full px-6 lg:px-12">
        <p className="text-accent text-sm tracking-[0.3em] mb-16 text-center">THE PEOPLE BEHIND THE WORK</p>

        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto w-full min-w-0 max-w-[500px] lg:mx-0">
            <img
              src="/images/LambFamily.webp"
              alt="Thatcher Lamb and family"
              className="h-auto max-w-full w-full object-contain object-center"
            />
          </div>

          <div className="flex min-h-0 min-w-0 flex-col justify-center px-0 py-12 lg:px-8 lg:py-0 xl:px-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] sm:text-sm">Founder</p>
            <h2 className="mt-4 break-words text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Thatcher Lamb
            </h2>
            <p className="mt-6 max-w-xl break-words text-base leading-relaxed text-gray-400 sm:text-lg">
              Thatcher founded Prodigy Construction with a simple belief — that every family deserves a home built with
              the same care and precision as the finest custom builds in the country. What started as a 14 year old boy
              running a framing crew for his dad&apos;s company has grown into one of Utah&apos;s most trusted builders,
              from custom homes to government contracts.
            </p>
            <hr className="mt-8 max-w-xl border-0 border-t border-[#C9A84C]" />
            <p className="mt-6 text-sm tracking-wide text-gray-400 sm:text-base">Builder. Father. Founder.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
