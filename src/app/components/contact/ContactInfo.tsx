import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30">
              <MapPin className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg tracking-tight" style={{ fontWeight: 900 }}>
              Office
            </h3>
            <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
              2795 Rolling Knolls Drive<br />
              Provo, UT 84604
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30">
              <Phone className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg tracking-tight" style={{ fontWeight: 900 }}>
              Phone
            </h3>
            <a
              href="tel:8016696228"
              className="text-sm text-foreground/70 hover:text-accent transition-colors tracking-wide block"
            >
              (801) 669-6228
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30">
              <Mail className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg tracking-tight" style={{ fontWeight: 900 }}>
              Email
            </h3>
            <a
              href="mailto:thatcher@prodigybuilders.net"
              className="text-sm text-foreground/70 hover:text-accent transition-colors tracking-wide block"
            >
              thatcher@prodigybuilders.net
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
