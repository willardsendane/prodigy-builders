export function StatsBar() {
  const stats = [
    "10+ Years in Business",
    "160+ Projects Completed",
    "Trusted by Municipalities Statewide",
    "Award-Winning Craftsmanship"
  ];

  return (
    <section className="bg-[#141414] border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center lg:border-r lg:last:border-r-0 border-white/5"
            >
              <p className="text-sm tracking-widest text-foreground/70">
                {stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
