import { ImageWithFallback } from '../figma/ImageWithFallback';

export function MeetTheTeam() {
  const team = [
    {
      name: "James Prodigy",
      title: "Founder & CEO",
      bio: "James started Prodigy Builders in 2004 with a single crew and an uncompromising standard. Twenty years later, that standard hasn't changed.",
      image: "https://images.unsplash.com/photo-1769072058181-37cd63e5c737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXJjaGl0ZWN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxODAwOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Daniel Reeves",
      title: "Co-Founder & Director of Construction",
      bio: "Daniel brings 25 years of on-site experience to every project. He's the reason our builds finish on time and exceed expectations.",
      image: "https://images.unsplash.com/photo-1758876734777-dcc6981f3671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkaXJlY3RvciUyMHBvcnRyYWl0JTIwaGFyZGhhdHxlbnwxfHx8fDE3NzE4ODIwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-accent text-sm tracking-[0.3em] mb-16 text-center">THE PEOPLE BEHIND THE WORK</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 overflow-hidden bg-[#141414]">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl tracking-wider mb-2 text-foreground font-['Blair_ITC']" style={{ fontWeight: 600 }}>
                {member.name}
              </h3>
              <p className="text-accent text-sm tracking-wider mb-4">
                {member.title}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}