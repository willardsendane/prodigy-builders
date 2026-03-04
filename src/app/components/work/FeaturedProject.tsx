import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FeaturedProject() {
  return (
    <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <p className="text-xs md:text-sm tracking-[0.3em] text-foreground/70 mb-16 text-center">
          FEATURED PROJECT
        </p>
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[16/10] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBlc3RhdGUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzE4NjczNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The Highlands Estate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
                The Highlands Estate
              </h2>
              <p className="text-xs tracking-[0.2em] text-accent">
                CUSTOM HOME
              </p>
              <p className="text-sm text-foreground/70 tracking-wide">
                Provo, UT  |  Completed 2023
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed tracking-wide">
              A 6,800 sq ft custom residence built for a growing family who wanted permanence. Every detail — from the hand-laid stone façade to the custom millwork inside — was designed to last generations. This project represents everything Prodigy Builders stands for.
            </p>
            
            <a
              href="#"
              className="inline-block text-sm text-accent hover:text-accent/80 transition-colors tracking-wide"
            >
              View Full Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
