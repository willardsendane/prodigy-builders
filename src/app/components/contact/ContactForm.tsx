import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { cn } from '../ui/utils';

const FORMSPREE_ACTION = 'https://formspree.io/f/xeerjjly';

export function ContactForm() {
  return (
    <section className="bg-[#0a0a0a] py-24 border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <form action={FORMSPREE_ACTION} method="POST" className="space-y-6">
            <div>
              <Label htmlFor="name" className="block mb-2 text-foreground/90 text-sm tracking-wide">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="h-12 bg-input-background border-white/10 text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
              />
            </div>
            <div>
              <Label htmlFor="email" className="block mb-2 text-foreground/90 text-sm tracking-wide">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 bg-input-background border-white/10 text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="block mb-2 text-foreground/90 text-sm tracking-wide">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(801) 555-1234"
                className="h-12 bg-input-background border-white/10 text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
              />
            </div>
            <div>
              <Label htmlFor="project-type" className="block mb-2 text-foreground/90 text-sm tracking-wide">
                Project Type
              </Label>
              <select
                id="project-type"
                name="project-type"
                required
                className={cn(
                  'flex h-12 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm text-foreground',
                  'focus:outline-none focus:ring-[3px] focus:ring-accent/30 focus:border-accent',
                  'border-white/10'
                )}
              >
                <option value="" className="text-muted-foreground">Select project type</option>
                <option value="Custom Home">Custom Home</option>
                <option value="Commercial">Commercial</option>
                <option value="Renovation">Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message" className="block mb-2 text-foreground/90 text-sm tracking-wide">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your project..."
                rows={5}
                className="min-h-32 bg-input-background border-white/10 text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 tracking-wider text-sm"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
