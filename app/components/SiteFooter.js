import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 py-16 text-slate-200">
      <div className="container-shell grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-white">World Humanity Services Inc.</h3>
          <p className="max-w-md text-slate-400">Serving communities with dignity, compassion, and practical care.</p>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Contact</h4>
          <p className="text-slate-400">
            <a href="mailto:info@worldhumanityservices.org" className="text-slate-200 hover:text-accent">
              info@worldhumanityservices.org
            </a>
          </p>
          <p className="text-slate-400">
            <a href="tel:+17182192207" className="text-slate-200 hover:text-accent">
              +1 (718) 219-2207
            </a>
          </p>
          <p className="mt-2">
            <Link href="/contact" className="text-slate-200 hover:text-accent">
              Contact our team
            </Link>
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Visit</h4>
          <p className="text-slate-400">129 N Grove Street</p>
          <p className="text-slate-400">Freeport, NY 11520</p>
        </div>
      </div>
    </footer>
  );
}
