import { useState } from 'react';

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial', 'Renovations', 'Custom Builds'];
  
  return (
    <section className="bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs tracking-[0.2em] transition-colors relative pb-2 ${
                activeFilter === filter
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {filter.toUpperCase()}
              {activeFilter === filter && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
