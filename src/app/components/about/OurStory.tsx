import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OurStory() {
  return (
    <section className="bg-[#0f0f0f] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-accent text-sm tracking-[0.3em] mb-16 text-center">OUR STORY</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl tracking-wider mb-8 text-foreground" style={{ fontWeight: 900 }}>
              From One Crew to a Legacy.
            </h2>
            <p className="text-foreground/80 leading-relaxed text-[0.9rem] md:text-lg">
              Prodigy Builders was founded in 2004 in Provo, Utah by James Prodigy, a craftsman who believed the construction industry had lost its soul. Starting with a single crew and a reputation for doing things right, Prodigy grew project by project — not through shortcuts, but through word of mouth earned on every job site. Today, we operate across the state, building custom homes and community developments with the same crew-first, client-focused approach that started it all.
            </p>
          </div>
          
          {/* Right: Image */}
          <div className="overflow-hidden bg-[#141414]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771791341666-2f2ad882e4c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBtb29keXxlbnwxfHx8fDE3NzE4ODIwNjh8MA&ixlib=rb-4.1.0&q=80&w=2560&utm_source=figma&utm_medium=referral"
              alt="Architectural detail"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}