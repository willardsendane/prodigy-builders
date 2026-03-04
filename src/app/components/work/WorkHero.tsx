import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WorkHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753505889211-9cfbac527474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBob21lJTIwYWVyaWFsJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MTk3ODEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury custom home aerial construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs md:text-sm tracking-[0.3em] text-foreground/70 mb-6">
          OUR WORK
        </p>
        <h1 className="tracking-wide mb-6 font-['Blair_ITC'] text-[96px] md:text-[120px]" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Every Project,<br />
          <span style={{ color: '#c9a961' }}>A Legacy.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto tracking-wide">
          From custom homes to large-scale developments — built with precision, delivered with pride.
        </p>
      </div>
    </section>
  );
}
