import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  quote: string;
  clientName: string;
  homeImageUrl: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-[#0f0f0f] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={testimonial.homeImageUrl}
                  alt={`Home for ${testimonial.clientName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-3xl italic text-foreground/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <footer className="text-sm tracking-widest text-accent">
                  — {testimonial.clientName}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
