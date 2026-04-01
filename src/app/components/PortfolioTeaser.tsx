import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

const goldClass = 'text-[#C9A84C]';

export function PortfolioTeaser() {
  return (
    <section id="work" className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl mb-20 tracking-tight" style={{ fontWeight: 900 }}>
          Our Work.
        </h2>

        <Link to="/work" className="group block mb-8 md:mb-10">
          <div className="relative w-full h-[500px] overflow-hidden">
            <ImageWithFallback
              src="/images/Moms_V1.png"
              alt="Berkshire Villa"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <p className={`text-xs md:text-sm uppercase tracking-[0.2em] ${goldClass} mb-3 font-medium`}>
                Featured Project
              </p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight" style={{ fontWeight: 700 }}>
                Berkshire Villa
              </h3>
              <p className="text-sm md:text-base text-white/70 max-w-xl mb-6 tracking-wide">
                Designed to turn heads. Built to stand for generations.
              </p>
              <span className={`inline-flex items-center gap-2 text-sm font-medium ${goldClass} group-hover:gap-3 transition-all duration-300 tracking-wide`}>
                View Project →
              </span>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Link to="/work/foremaster" className="group relative block h-[400px] overflow-hidden">
            <ImageWithFallback
              src="/images/Foremaster_V5.png"
              alt="Foremaster Ridge"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl text-white mb-3 tracking-wide" style={{ fontWeight: 600 }}>
                Foremaster Ridge
              </h3>
              <span className={`inline-flex items-center gap-2 text-sm ${goldClass} group-hover:gap-3 transition-all duration-300 tracking-wide`}>
                View Project →
              </span>
            </div>
          </Link>

          <Link to="/work/hideout" className="group relative block h-[400px] overflow-hidden">
            <ImageWithFallback
              src="/images/Hideout_V1.png"
              alt="Hideout"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl text-white mb-3 tracking-wide" style={{ fontWeight: 600 }}>
                Hideout
              </h3>
              <span className={`inline-flex items-center gap-2 text-sm ${goldClass} group-hover:gap-3 transition-all duration-300 tracking-wide`}>
                View Project →
              </span>
            </div>
          </Link>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            to="/work"
            className={`inline-flex items-center gap-2 text-sm font-medium ${goldClass} hover:gap-3 transition-all duration-300 tracking-wide`}
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
