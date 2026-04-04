import { Instagram } from 'lucide-react';

const INSTAGRAM_URL =
  'https://www.instagram.com/prodigy_construction_ut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

export function Footer() {
  return (
    <footer className="border-t border-[#C9A84C]/30 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-stretch justify-between gap-10 py-12 md:flex-row md:items-center">
          <div className="max-w-md">
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-white">PRODIGY CONSTRUCTION</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Designed to turn heads. Built to stand for generations.
            </p>
          </div>

          <div className="flex w-full flex-col items-end gap-3 text-right md:ml-auto md:w-auto">
            <p className="text-sm text-gray-400">2795 Rolling Knolls Drive, Provo, UT 84604</p>
            <a
              href="mailto:thatcher@prodigybuilders.net"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              thatcher@prodigybuilders.net
            </a>
            <a href="tel:8016696228" className="text-sm text-gray-400 transition-colors hover:text-white">
              (801)669-6228
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex text-gray-400 transition-colors hover:text-[#C9A84C]"
              aria-label="Prodigy Construction on Instagram"
            >
              <Instagram className="h-6 w-6" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 text-center">
          <p className="text-xs tracking-wider text-gray-500">© 2026 Prodigy Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
