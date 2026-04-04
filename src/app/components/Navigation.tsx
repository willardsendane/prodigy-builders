import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/58da60d0-3f15-4032-a88a-c8b7573fc5af.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/meet-our-founder', label: 'Our Founder' },
  { to: '/dropbox', label: 'Client Dropbox' },
  { to: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-xl tracking-wider text-foreground">
            <img src={logo} alt="Prodigy Builders" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground hover:text-accent transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/5">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-sm tracking-wide text-foreground/70 hover:text-accent transition-colors border-b border-white/5 last:border-0"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}