import { DropboxHero } from '../components/dropbox/DropboxHero';
import { DropboxContent } from '../components/dropbox/DropboxContent';
import { FooterCTA } from '../components/FooterCTA';

export function ClientDropbox() {
  return (
    <>
      <DropboxHero />
      <DropboxContent />
      <FooterCTA />
    </>
  );
}
