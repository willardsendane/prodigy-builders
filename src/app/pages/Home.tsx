import { Hero } from '../components/Hero';
import { CredibilityBar } from '../components/CredibilityBar';
import { PortfolioTeaser } from '../components/PortfolioTeaser';
import { ProdigyDifference } from '../components/ProdigyDifference';
import { ProcessTeaser } from '../components/ProcessTeaser';
import { Testimonials } from '../components/Testimonials';
import { FooterCTA } from '../components/FooterCTA';
import heroImage from '../../assets/hero.png';


export function Home() {
  const projects = [
    {
      name: "The Highlands Estate",
      imageUrl: "https://images.unsplash.com/photo-1766848834880-59e1632d92a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjdXN0b20lMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxNDUyNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Riverside Modern",
      imageUrl: "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsdXh1cnklMjBob21lJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTQ1MjQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "The Summit Residence",
      imageUrl: "https://images.unsplash.com/photo-1733062267300-199458eb60dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbHV4dXJ5JTIwaG91c2UlMjBkdXNrfGVufDF8fHx8MTc3MTQ1MjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const testimonials = [
    {
      quote: "Prodigy Builders transformed our vision into a masterpiece that exceeds every expectation. Their attention to detail is unparalleled.",
      clientName: "Sarah & Michael Chen",
      homeImageUrl: "https://images.unsplash.com/photo-1616213141730-3a3756a76207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjdXN0b20lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxNDUyNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      quote: "The craftsmanship and precision they brought to our home is extraordinary. This is truly a home built for generations.",
      clientName: "David & Rebecca Martinez",
      homeImageUrl: "https://images.unsplash.com/photo-1750271329214-a7dbce880e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwbmlnaHR8ZW58MXx8fHwxNzcxNDUyNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <>
      <Hero imageUrl={heroImage} />
      <CredibilityBar />
      <PortfolioTeaser projects={projects} />
      <ProdigyDifference />
      <ProcessTeaser />
      <Testimonials testimonials={testimonials} />
      <FooterCTA />
    </>
  );
}