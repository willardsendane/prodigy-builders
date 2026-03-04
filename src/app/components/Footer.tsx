import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="text-lg tracking-wider text-foreground">
              PRODIGY BUILDERS
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center">
            <a href="#work" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#process" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Process
            </a>
            <Link to="/about" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Contact & Social */}
          <div className="text-center md:text-right space-y-4">
            <p className="text-sm text-foreground/70">
              2795 Rolling Knolls Drive<br />
              Provo, UT 84604
            </p>
            <p className="text-sm text-foreground/70">
              thatcher@prodigybuilders.net
            </p>
            <p className="text-sm text-foreground/70">
              (801)669-6228
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-foreground/50 tracking-wider">
            © 2026 Prodigy Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}