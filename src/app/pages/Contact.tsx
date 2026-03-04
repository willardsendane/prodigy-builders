import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactCTA } from '../components/contact/ContactCTA';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactCTA />
      <ContactInfo />
    </>
  );
}
