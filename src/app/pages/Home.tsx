import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Prodigy Builders | Custom Homes &amp; Commercial Construction in Utah</title>
        <meta
          name="description"
          content="Utah's luxury custom home builder and commercial contractor. From Southern Utah to Salt Lake County — built right, every time."
        />
      </Helmet>
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