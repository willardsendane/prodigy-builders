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
        <h2
          className="mb-20 text-center text-[2.25rem] text-white tracking-tight sm:text-4xl md:text-5xl"
          style={{ fontWeight: 900 }}
        >
          Our Process.
        </h2>

        <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-left">
              <div className="font-heading mb-6 text-6xl text-[#C9A84C]" style={{ fontWeight: 700, lineHeight: 1 }}>
                {step.number}
              </div>
              <h3 className="mb-4 text-2xl tracking-wide text-white" style={{ fontWeight: 600 }}>
                {step.title}
              </h3>
              <p className="leading-relaxed text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#C9A84C] transition-all duration-300 hover:gap-3 tracking-wide"
          >
            Build with Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}