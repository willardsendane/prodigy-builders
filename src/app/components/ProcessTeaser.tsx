import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function ProcessTeaser() {
  const steps = [
    {
      number: "01",
      title: "Dream",
      description: "We begin by understanding your vision, lifestyle, and aspirations for your custom home."
    },
    {
      number: "02",
      title: "Design",
      description: "Our team collaborates with top architects to bring your vision to life with precision and elegance."
    },
    {
      number: "03",
      title: "Build",
      description: "Expert craftsmen execute every detail with the quality that has defined Prodigy for decades."
    }
  ];

  return (
    <section id="process" className="bg-[#1a1a1a] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl mb-20 text-center text-white tracking-tight" style={{ fontWeight: 900 }}>
            Our Process.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="font-heading text-6xl mb-6 text-[#C9A84C]" style={{ fontWeight: 700, lineHeight: 1 }}>
                  {step.number}
                </div>
                <h3 className="text-2xl mb-4 text-white tracking-wide" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:gap-3 transition-all duration-300 tracking-wide"
            >
              Build with Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}