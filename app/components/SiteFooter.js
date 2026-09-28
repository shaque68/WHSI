export default function SiteFooter() {
  return (
    <footer className="bg-brand-900 py-12 text-white">
      <div className="container-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="/" className="text-lg font-semibold tracking-tight text-white">
            World Humanity Services
          </a>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Practical support, offered with compassion and dignity.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="/about">About</a></li>
            <li><a className="hover:text-white" href="/programs">Programs</a></li>
            <li><a className="hover:text-white" href="/volunteer">Volunteer</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="mailto:info@worldhumanityservices.org">Email our team</a></li>
            <li><a className="hover:text-white" href="tel:+17182192207">+1 (718) 219-2207</a></li>
            <li><a className="hover:text-white" href="/contact">Contact details</a></li>
          </ul>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/15 pt-5 text-xs text-white/55">
        World Humanity Services Inc.
      </div>
    </footer>
  );
}
