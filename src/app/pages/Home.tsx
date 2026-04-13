import { Hero } from '../components/Hero';
import { CredibilityBar } from '../components/CredibilityBar';
import { PortfolioTeaser } from '../components/PortfolioTeaser';
import { ProdigyDifference } from '../components/ProdigyDifference';
import { TrustedByCarousel } from '../components/TrustedByCarousel';
import { ProcessTeaser } from '../components/ProcessTeaser';
import { Testimonials } from '../components/Testimonials';
import { FooterCTA } from '../components/FooterCTA';

export function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <PortfolioTeaser />
      <ProdigyDifference />
      <TrustedByCarousel />
      <ProcessTeaser />
      <Testimonials />
      <FooterCTA />
    </>
  );
}