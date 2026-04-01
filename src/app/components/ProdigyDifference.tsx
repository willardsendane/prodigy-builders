import { Building2, Ruler, Home } from 'lucide-react';

export function ProdigyDifference() {
  const differences = [
    {
      icon: Building2,
      title: "Institutional Scale",
      description: "Our expertise spans from single custom homes to complete commercial developments, bringing unmatched capability to every project."
    },
    {
      icon: Ruler,
      title: "Unmatched Precision",
      description: "Decades of municipal work have honed our attention to detail, ensuring every aspect of your home meets the highest standards."
    },
    {
      icon: Home,
      title: "Exceeding Expectations",
      description: "The home you always pictured — built better than you knew to ask for."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] to-[#141414] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl mb-20 text-center tracking-tight" style={{ fontWeight: 900 }}>
          The Prodigy Difference.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border border-accent/30">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-4 tracking-wide" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}