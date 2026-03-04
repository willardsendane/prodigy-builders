import { WorkHero } from '../components/work/WorkHero';
import { FilterBar } from '../components/work/FilterBar';
import { ProjectGrid } from '../components/work/ProjectGrid';
import { FeaturedProject } from '../components/work/FeaturedProject';
import { StatsBar } from '../components/work/StatsBar';
import { Testimonials } from '../components/Testimonials';
import { FooterCTA } from '../components/FooterCTA';

export function OurWork() {
  const projects = [
    {
      name: "The Highlands Estate",
      category: "CUSTOM HOME",
      location: "Provo, UT",
      imageUrl: "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBlc3RhdGUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzE4NjczNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Riverside Modern",
      category: "RESIDENTIAL",
      location: "Salt Lake City, UT",
      imageUrl: "https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjByZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE5MjkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "The Summit Residence",
      category: "CUSTOM HOME",
      location: "Park City, UT",
      imageUrl: "https://images.unsplash.com/photo-1703622338180-5065bc8ffd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMG1vZGVybiUyMGhvbWUlMjBwYXJrJTIwY2l0eXxlbnwxfHx8fDE3NzE5NzgxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Cedar Ridge Development",
      category: "COMMERCIAL",
      location: "Orem, UT",
      imageUrl: "https://images.unsplash.com/photo-1769940878588-b93921a1a09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzE5NDg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "The Ashford Estate",
      category: "CUSTOM HOME",
      location: "Draper, UT",
      imageUrl: "https://images.unsplash.com/photo-1601232965248-1de646e42468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtb2Rlcm4lMjByZXNpZGVuY2UlMjBkcmFwZXJ8ZW58MXx8fHwxNzcxOTc4MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Lakefront Commons",
      category: "COMMERCIAL",
      location: "Lehi, UT",
      imageUrl: "https://images.unsplash.com/photo-1764470738268-99e79e2c8b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlZnJvbnQlMjBjb21tZXJjaWFsJTIwcHJvcGVydHl8ZW58MXx8fHwxNzcxOTc4MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "The Marlowe",
      category: "RENOVATION",
      location: "Provo, UT",
      imageUrl: "https://images.unsplash.com/photo-1758315417321-83eb30a39710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTkzMTQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Stonegate Townhomes",
      category: "RESIDENTIAL",
      location: "Spanish Fork, UT",
      imageUrl: "https://images.unsplash.com/photo-1759306108529-2b534e8e5f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3duaG9tZSUyMHJlc2lkZW50aWFsJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcxOTc4MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "The Weston Build",
      category: "CUSTOM HOME",
      location: "Heber City, UT",
      imageUrl: "https://images.unsplash.com/photo-1753505889211-9cfbac527474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXN0b20lMjBob21lJTIwYWVyaWFsJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MTk3ODEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const testimonials = [
    {
      quote: "Prodigy Builders transformed our vision into a masterpiece that exceeds every expectation. Their attention to detail is unparalleled.",
      clientName: "Sarah & Michael Chen",
      homeImageUrl: "https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTk3ODExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      quote: "The craftsmanship and precision they brought to our home is extraordinary. This is truly a home built for generations.",
      clientName: "David & Rebecca Martinez",
      homeImageUrl: "https://images.unsplash.com/photo-1762811054950-b74e0a055c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb29sJTIwZXh0ZXJpb3IlMjBldmVuaW5nfGVufDF8fHx8MTc3MTk3ODExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <>
      <WorkHero />
      <FilterBar />
      <ProjectGrid projects={projects} />
      <FeaturedProject />
      <StatsBar />
      <Testimonials testimonials={testimonials} />
      <FooterCTA />
    </>
  );
}
