import { Helmet } from 'react-helmet-async';
import { AboutHero } from '../components/about/AboutHero';
import { CoreValues } from '../components/about/CoreValues';
import { MeetTheTeam } from '../components/about/MeetTheTeam';
import { OurStory } from '../components/about/OurStory';

export function About() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <Helmet>
        <title>About Prodigy Builders | Utah Custom Home Builder</title>
        <meta
          name="description"
          content="Prodigy Builders, founded by Thatcher Lamb — a luxury custom home builder and commercial contractor serving Utah from St. George to Salt Lake."
        />
      </Helmet>
      <AboutHero />
      <CoreValues />
      <MeetTheTeam />
      <OurStory />
    </div>
  );
}
