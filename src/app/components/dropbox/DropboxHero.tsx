import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DropboxHero() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnRzJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc3MTk3ODExNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construction documents and blueprints"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs md:text-sm tracking-[0.3em] text-foreground/70 mb-6">
          CLIENT PORTAL
        </p>
        <h1 className="tracking-wide mb-6 font-['Blair_ITC'] text-[80px] md:text-[100px]" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Secure Document <br />
          <span style={{ color: '#c9a961' }}>Access.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto tracking-wide">
          Upload, download, and manage project documents in one secure location.
        </p>
      </div>
    </section>
  );
}
