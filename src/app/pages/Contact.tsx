import { Helmet } from 'react-helmet-async';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactCTA } from '../components/contact/ContactCTA';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Prodigy Builders | Start Your Build</title>
        <meta
          name="description"
          content="Ready to build? Get in touch with Prodigy Builders and start your custom home journey in Utah."
        />
      </Helmet>
      <ContactHero />
      <ContactForm />
      <ContactCTA />
      <ContactInfo />
    </>
  );
}
