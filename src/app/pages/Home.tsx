import { Hero } from '../components/Hero';
import { CredibilityBar } from '../components/CredibilityBar';
import { PortfolioTeaser } from '../components/PortfolioTeaser';
import { ProdigyDifference } from '../components/ProdigyDifference';
import { ProcessTeaser } from '../components/ProcessTeaser';
import { Testimonials } from '../components/Testimonials';
import { FooterCTA } from '../components/FooterCTA';
import heroImage from '../../assets/hero.png';


export function Home() {
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
      <PortfolioTeaser />
      <ProdigyDifference />
      <ProcessTeaser />
      <Testimonials testimonials={testimonials} />
      <FooterCTA />
    </>
  );
}