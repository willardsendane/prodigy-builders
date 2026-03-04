import { Link } from 'react-router';
import logo from '../../assets/58da60d0-3f15-4032-a88a-c8b7573fc5af.png';


export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-xl tracking-wider text-foreground">
            <img src={logo} alt="Prodigy Builders" className="h-10" />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link to="/" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/work" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/dropbox" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Client Dropbox
            </Link>
            <Link to="/contact" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}