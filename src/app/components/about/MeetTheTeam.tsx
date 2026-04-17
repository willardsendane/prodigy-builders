const timelineLineStyle = {
  left: 19,
  top: 20,
  bottom: 20,
  width: 1,
  background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.4), rgba(122, 92, 18, 0.4))',
};

export function MeetTheTeam() {
  return (
    <section className="min-w-0 overflow-x-hidden bg-[#0d0d0d]">
      <div className="mx-auto max-w-[720px] px-12 py-16">
        <p
          className="mb-[56px] text-center text-sm uppercase tracking-[0.3em] text-[#C9A84C]"
        >
          OUR PROCESS
        </p>

        <div className="relative flex flex-col">
          <div className="pointer-events-none absolute w-px" style={timelineLineStyle} aria-hidden />

          <div className="relative mb-14 flex flex-row items-start gap-8">
            <div
              className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#7A5C12] bg-[#1a1508]"
              aria-hidden
            >
              <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#7A5C12]" />
            </div>
            <div className="flex min-w-0 flex-col pt-2">
              <p className="mb-1.5 text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]/70">BEFORE</p>
              <h3 className="mb-3 text-xl font-semibold text-white">We Think Through Every Detail</h3>
              <p className="max-w-[520px] text-sm leading-[1.75] text-white/[0.55]">
                Before a single nail is driven, you&apos;ll have a detailed plan to accomplish precisely what you want, a real
                timeline, and a direct line to the people building your project. We walk the site, ask the hard questions, and
                tell you exactly what it takes before we commit to anything.
              </p>
            </div>
          </div>

          <div className="relative mb-14 flex flex-row items-start gap-8">
            <div
              className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#B8881E] bg-[#1e1608]"
              aria-hidden
            >
              <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#B8881E]" />
            </div>
            <div className="flex min-w-0 flex-col pt-2">
              <p className="mb-1.5 text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]/70">DURING</p>
              <h3 className="mb-3 text-xl font-semibold text-white">We Don&apos;t Cut Corners</h3>
              <p className="max-w-[520px] text-sm leading-[1.75] text-white/[0.55]">
                Once we break ground, your unique plan is executed precisely. Your ideal outcome is our ideal outcome, no matter
                the roadblocks. Every phase is handled by experienced specialists who hold themselves to the highest standard of
                craft and accountability, so no detail gets missed and nothing is left to chance.
              </p>
            </div>
          </div>

          <div className="relative flex flex-row items-start gap-8">
            <div
              className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#C9A84C] bg-[#221a06]"
              aria-hidden
            >
              <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#C9A84C]" />
            </div>
            <div className="flex min-w-0 flex-col pt-2">
              <p className="mb-1.5 text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]/70">AFTER</p>
              <h3 className="mb-3 text-xl font-semibold text-white">We Stick Around</h3>
              <p className="max-w-[520px] text-sm leading-[1.75] text-white/[0.55]">
                We aren&apos;t satisfied until you are. One day after handoff or one year later, we are invested in your build
                and here to help no matter what it takes. When you call, the owner answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
