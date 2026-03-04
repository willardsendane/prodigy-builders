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
    <section className="bg-[#0f0f0f] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Decorative line above section label */}
        <div className="w-24 h-px bg-accent/30 mx-auto mb-8"></div>
        
        <p className="text-accent text-sm tracking-[0.3em] mb-8 text-center">OUR VALUES</p>
        
        <h2 className="text-4xl md:text-5xl tracking-wider mb-20 text-center text-foreground font-['Blair_ITC']" style={{ fontWeight: 900 }}>
          A Single Standard. For Every Client.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <Icon className="w-12 h-12 text-accent" strokeWidth={1} />
                </div>
                <h3 className="text-2xl tracking-wider mb-4 text-foreground font-['Blair_ITC']" style={{ fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
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