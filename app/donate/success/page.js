import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';

export const metadata = {
  title: 'Thank You | World Humanity Services Inc.',
  description: 'Thank you for supporting World Humanity Services.',
};

export default function DonationSuccessPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="section-shell">
          <div className="container-shell mx-auto max-w-2xl text-center">
            <p className="eyebrow">Thank you</p>
            <h1 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">Your generosity makes a difference.</h1>
            <p className="hero-text mt-6">
              Your donation was submitted securely through Stripe. Thank you for helping World Humanity Services support families and communities.
            </p>
            <Link href="/" className="btn-primary mt-8">
              Return home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
