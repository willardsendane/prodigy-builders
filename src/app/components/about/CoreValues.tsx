import { Pen, Home, ShieldCheck } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: Pen,
      title: "Obsessive Craftsmanship",
      description: "Every custom home we build starts with a simple belief — your home deserves the same precision we bring to projects held to government standards. No shortcuts. No compromises. Just work we're proud to put our name on."
    },
    {
      icon: Home,
      title: "Built for Your Family. Proven at Every Scale.",
      description: "We've earned the trust of municipalities and developers across the state. But our favorite projects are still the ones where we sit down with a family and turn their vision into the place they'll call home for generations."
    },
    {
      icon: ShieldCheck,
      title: "A Single Standard of Excellence",
      description: "Whether we're breaking ground on a 200-unit development or a single custom build, our crew shows up the same way — with the experience, resources, and accountability that most custom builders simply can't offer."
    }
  ];

  return (
    <section className="min-w-0 overflow-x-hidden bg-[#0f0f0f] py-32">
      <div className="container mx-auto min-w-0 max-w-full px-6 lg:px-12">
        {/* Decorative line above section label */}
        <div className="w-24 h-px bg-accent/30 mx-auto mb-8"></div>
        
        <p className="text-accent text-sm tracking-[0.3em] mb-8 text-center">OUR VALUES</p>
        
        <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl tracking-wider mb-20 text-center text-foreground" style={{ fontWeight: 900 }}>
          Built Like It&apos;s Our Own.
        </h2>
        
        <div className="grid min-w-0 grid-cols-1 gap-16 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="min-w-0 text-center">
                <div className="mb-6 flex justify-center">
                  <Icon className="h-12 w-12 shrink-0 text-accent" strokeWidth={1} />
                </div>
                <h3 className="mb-4 break-words text-2xl tracking-wider text-foreground" style={{ fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="break-words leading-relaxed text-foreground/70">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}