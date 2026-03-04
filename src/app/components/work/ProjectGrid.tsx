import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Project {
  name: string;
  category: string;
  location: string;
  imageUrl: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group space-y-6">
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Project Details */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
                  {project.name}
                </h3>
                <p className="text-xs tracking-[0.2em] text-accent">
                  {project.category}
                </p>
                <p className="text-sm text-foreground/70 tracking-wide">
                  {project.location}
                </p>
                <a
                  href="#"
                  className="inline-block text-sm text-accent hover:text-accent/80 transition-colors tracking-wide"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
