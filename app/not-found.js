import Link from 'next/link';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you requested could not be found.',
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="content-start" className="flex min-h-[70vh] items-center">
        <div className="container-shell py-20 text-center">
          <p className="eyebrow">Page not found</p>
          <h1 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            We couldn’t find that page.
          </h1>
          <p className="hero-text mx-auto mt-4 max-w-2xl">
            The page may have moved or no longer exists. Please return home or visit one of our main pages.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/" className="btn-primary">
              Go home
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
