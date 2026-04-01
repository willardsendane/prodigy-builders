import { Hero } from '../components/Hero';
import { CredibilityBar } from '../components/CredibilityBar';
import { PortfolioTeaser } from '../components/PortfolioTeaser';
import { ProdigyDifference } from '../components/ProdigyDifference';
import { ProcessTeaser } from '../components/ProcessTeaser';
import { Testimonials } from '../components/Testimonials';
import { FooterCTA } from '../components/FooterCTA';
import heroImage from '../../assets/hero.png';


export function Home() {
  return (
    <>
      <Hero imageUrl={heroImage} />
      <CredibilityBar />
      <PortfolioTeaser />
      <ProdigyDifference />
      <ProcessTeaser />
      <Testimonials />
      <FooterCTA />
    </>
  );
}