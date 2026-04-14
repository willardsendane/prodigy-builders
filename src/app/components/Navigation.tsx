import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/58da60d0-3f15-4032-a88a-c8b7573fc5af.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/our-founder', label: 'Our Founder' },
  { to: '/dropbox', label: 'Client Dropbox' },
  { to: '/contact-us', label: 'Contact Us' },
];

const completedProjectLinks = [
  { to: '/berkshire-villa', label: 'Berkshire Villa' },
  { to: '/our-work/hurricane-retreat', label: 'Hurricane Retreat' },
  { to: '/our-work/alpine-manor', label: 'Alpine Manor' },
  { to: '/our-work/cottonwood-view', label: 'Cottonwood View' },
  { to: '/our-work/foremaster-ridge', label: 'Foremaster Ridge' },
  { to: '/our-work/hideout', label: 'Hideout' },
  { to: '/our-work/holladay', label: 'Holladay' },
  { to: '/our-work/traverse-outlook', label: 'Traverse Outlook' },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOurWorkOpen, setMobileOurWorkOpen] = useState(false);
  const [desktopOurWorkOpen, setDesktopOurWorkOpen] = useState(false);
  const closeDropdownTimeoutRef = useRef<number | null>(null);

  const openDesktopOurWorkDropdown = () => {
    if (closeDropdownTimeoutRef.current !== null) {
      window.clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
    setDesktopOurWorkOpen(true);
  };

  const closeDesktopOurWorkDropdownWithDelay = () => {
    if (closeDropdownTimeoutRef.current !== null) {
      window.clearTimeout(closeDropdownTimeoutRef.current);
    }
    closeDropdownTimeoutRef.current = window.setTimeout(() => {
      setDesktopOurWorkOpen(false);
      closeDropdownTimeoutRef.current = null;
    }, 150);
  };

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
            <div
              className="relative"
              onMouseEnter={openDesktopOurWorkDropdown}
              onMouseLeave={closeDesktopOurWorkDropdownWithDelay}
              onFocus={openDesktopOurWorkDropdown}
              onBlur={closeDesktopOurWorkDropdownWithDelay}
            >
              <div className="flex items-center gap-1">
                <Link to="/our-work" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
                  Our Work
                </Link>
                <span
                  aria-hidden="true"
                  className={`text-xs text-foreground/70 transition-colors ${desktopOurWorkOpen ? 'text-foreground' : ''}`}
                >
                  ▾
                </span>
              </div>
              <div className="absolute left-1/2 top-full z-40 h-3 w-64 -translate-x-1/2 bg-transparent" aria-hidden="true" />
              <div
                className={`absolute left-1/2 top-full z-50 mt-0 w-64 -translate-x-1/2 rounded-lg border border-[#C9A84C]/30 bg-[#0a0a0a] p-4 shadow-xl shadow-black/40 transition-all duration-200 ${
                  desktopOurWorkOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <Link
                  to="/our-work"
                  className="block text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-[#C9A84C]"
                >
                  See Our Work
                </Link>
                <div className="my-3 h-px w-full bg-[#C9A84C]/30" />
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C]">Completed Projects</p>
                <div className="flex flex-col gap-2">
                  {completedProjectLinks.map(({ to, label }) => (
                    <Link key={to} to={to} className="text-sm tracking-wide text-white/80 transition-colors hover:text-[#C9A84C]">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
            <div className="border-b border-white/5">
              <div className="flex items-center justify-between">
                <Link
                  to="/our-work"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 py-3 px-2 text-sm tracking-wide text-foreground/70 hover:text-accent transition-colors"
                >
                  Our Work
                </Link>
                <button
                  type="button"
                  aria-label={mobileOurWorkOpen ? 'Collapse Our Work links' : 'Expand Our Work links'}
                  aria-expanded={mobileOurWorkOpen}
                  onClick={() => setMobileOurWorkOpen((isOpen) => !isOpen)}
                  className="px-2 text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  ▾
                </button>
              </div>
              {mobileOurWorkOpen && (
                <div className="pb-3 pl-4">
                  <Link
                    to="/our-work"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-[#C9A84C]"
                  >
                    See Our Work
                  </Link>
                  <div className="my-2 h-px w-full bg-[#C9A84C]/30" />
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C]">Completed Projects</p>
                  <div className="flex flex-col gap-1">
                    {completedProjectLinks.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setMenuOpen(false)}
                        className="py-1 text-sm tracking-wide text-white/80 transition-colors hover:text-[#C9A84C]"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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