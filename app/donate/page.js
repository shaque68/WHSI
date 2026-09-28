import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';
import DonationCheckoutForm from '../components/DonationCheckoutForm';

export const metadata = {
  title: 'Donate',
  description:
    'Make a one-time or monthly donation to support World Humanity Services programs.',
  alternates: { canonical: '/donate' },
};

export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="Make a difference"
          title="Give practical support with care."
          description="Choose a one-time or monthly gift. Your donation is processed securely through Stripe Checkout."
        />
        <section className="section-shell">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <aside className="pt-2">
              <p className="eyebrow">Your gift supports</p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900">
                Essential care for people facing hardship.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Donations help sustain the organization’s work in education, food and water aid, healthcare, housing, and family support.
              </p>
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-6 text-slate-600">
                You’ll review and complete your gift on Stripe’s secure checkout page.
              </p>
              <p className="mt-5 text-sm text-slate-600">
                Questions about how donations support our work?{' '}
                <a href="/contact" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900">
                  Contact our team
                </a>
                .
              </p>
            </aside>
            <DonationCheckoutForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
