import { Helmet } from 'react-helmet-async';
import { DropboxHero } from '../components/dropbox/DropboxHero';
import { DropboxContent } from '../components/dropbox/DropboxContent';
import { FooterCTA } from '../components/FooterCTA';

export function ClientDropbox() {
  return (
    <>
      <Helmet>
        <title>Client Portal | Prodigy Builders</title>
        <meta
          name="description"
          content="Secure document sharing portal for Prodigy Builders clients. Access contracts, blueprints, permits, and project updates."
        />
      </Helmet>
      <DropboxHero />
      <DropboxContent />
      <FooterCTA />
    </>
  );
}
