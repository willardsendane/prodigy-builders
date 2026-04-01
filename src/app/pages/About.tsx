import { AboutHero } from '../components/about/AboutHero';
import { CoreValues } from '../components/about/CoreValues';
import { MeetTheTeam } from '../components/about/MeetTheTeam';
import { OurStory } from '../components/about/OurStory';

export function About() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <AboutHero />
      <CoreValues />
      <MeetTheTeam />
      <OurStory />
    </div>
  );
}
