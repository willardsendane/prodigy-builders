import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  name: string;
  imageUrl: string;
}

interface PortfolioTeaserProps {
  projects: Project[];
}

export function PortfolioTeaser({ projects }: PortfolioTeaserProps) {
  return (
    <section id="work" className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl mb-20 tracking-tight font-['Blair_ITC']" style={{ fontWeight: 900 }}>
          Our Work.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative mb-6 aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h3 className="text-xl mb-3 tracking-wide font-['Blair_ITC']" style={{ fontWeight: 600 }}>
                {project.name}
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all duration-300 tracking-wide"
              >
                View Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}