const CX = 50;
const CY = 50;

function IconBuiltForToughest() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 100 100"
      className="shrink-0 overflow-visible"
      aria-hidden
    >
      <defs>
        <radialGradient id="meetTeamRadialGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#8B6914" stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={CX} cy={CY} rx={58} ry={58} fill="url(#meetTeamRadialGlow1)" />
      <path
        d={`M ${CX} ${CY} L ${CX + 32.9} ${CY + 19} A 38 38 0 0 1 ${CX - 32.9} ${CY + 19} A 38 38 0 0 1 ${CX} ${CY - 38} Z`}
        fill="none"
        stroke="#6B5010"
        strokeWidth={1.5}
        opacity={0.4}
      />
      <path
        d={`M ${CX} ${CY} L ${CX} ${CY - 38} A 38 38 0 0 1 ${CX + 32.9} ${CY + 19} Z`}
        fill="#7A5C12"
      />
    </svg>
  );
}

function IconTrustedHighest() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 100 100"
      className="shrink-0 overflow-visible"
      aria-hidden
    >
      <defs>
        <radialGradient id="meetTeamRadialGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B8881E" stopOpacity={0.45} />
          <stop offset="100%" stopColor="#B8881E" stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={CX} cy={CY} rx={68} ry={68} fill="url(#meetTeamRadialGlow2)" />
      <g transform={`rotate(240 ${CX} ${CY})`}>
        <path
          d={`M ${CX} ${CY} m 0 -38 A 38 38 0 0 1 ${CX - 17.1} ${CY + 37} L ${CX} ${CY} Z`}
          fill="none"
          stroke="#8B6914"
          strokeWidth={1.5}
          opacity={0.4}
        />
      </g>
      <path
        d={`M ${CX} ${CY} m 0 -38 A 38 38 0 1 1 ${CX - 33.1} ${CY + 18.9} L ${CX} ${CY} Z`}
        fill="#B8881E"
      />
    </svg>
  );
}

function IconSameStandard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 100 100"
      className="shrink-0 overflow-visible"
      aria-hidden
    >
      <defs>
        <radialGradient id="meetTeamRadialGlow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity={0.7} />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={CX} cy={CY} rx={78} ry={78} fill="url(#meetTeamRadialGlow3)" />
      <circle cx={CX} cy={CY} r={38} fill="#C9A84C" />
      <circle cx={CX} cy={CY} r={38} fill="none" stroke="#ffffff" strokeWidth={0.5} opacity={0.15} />
    </svg>
  );
}

export function MeetTheTeam() {
  return (
    <section className="min-w-0 overflow-x-hidden bg-[#0d0d0d] py-40 md:py-48">
      <div className="container mx-auto min-w-0 max-w-full px-6 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-24 text-center md:space-y-28">
          <div>
            <div className="mb-6 flex justify-center">
              <IconBuiltForToughest />
            </div>
            <h3 className="break-words text-2xl tracking-wider text-foreground" style={{ fontWeight: 600 }}>
              Built for the Toughest Jobs
            </h3>
            <div
              className="mx-auto bg-[#C9A84C]"
              style={{ width: 40, height: 2, marginBottom: 12 }}
              aria-hidden
            />
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              Prodigy has earned its reputation across some of the most demanding construction environments in the country.
              From traveling the nation building wastewater treatment facilities for oil rigs and open pit mines, to delivering
              on government contracts for the State of Utah.
            </p>
          </div>
          <div>
            <div className="mb-6 flex justify-center">
              <IconTrustedHighest />
            </div>
            <h3 className="break-words text-2xl tracking-wider text-foreground" style={{ fontWeight: 600 }}>
              Trusted at the Highest Level
            </h3>
            <div
              className="mx-auto bg-[#C9A84C]"
              style={{ width: 40, height: 2, marginBottom: 12 }}
              aria-hidden
            />
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              Prodigy has performed work for the Utah State Correctional Facility, the Department of Corrections Office
              Complex, UTA, UDOT, and municipalities across Utah and Salt Lake Counties. When the standard is
              non-negotiable, Prodigy is the call.
            </p>
          </div>
          <div>
            <div className="mb-6 flex justify-center">
              <IconSameStandard />
            </div>
            <h3 className="break-words text-2xl tracking-wider text-foreground" style={{ fontWeight: 600 }}>
              The Same Standard, Every Time
            </h3>
            <div
              className="mx-auto bg-[#C9A84C]"
              style={{ width: 40, height: 2, marginBottom: 12 }}
              aria-hidden
            />
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              That same precision and accountability is what drives every custom home build and remodel we take on.
              Whatever the scale, whatever the scope, the work speaks for itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
