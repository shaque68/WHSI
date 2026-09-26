import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import DonationCheckoutForm from '../components/DonationCheckoutForm';

export const metadata = {
  title: 'Donate | World Humanity Services Inc.',
  description: 'Support World Humanity Services with one-time or monthly donations that fund education, food, healthcare, and housing assistance.',
};

export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">Support our mission</p>
            <h1 className="page-title">
              Every gift helps open the door to care, learning, and lasting hope.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              Your contribution helps fund education, food and water, healthcare, housing, and funeral assistance for families in need.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">One-time gift</h3>
                <p className="text-slate-600">Provide immediate support for relief efforts and direct community care.</p>
              </article>
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Monthly partner</h3>
                <p className="text-slate-600">Help us sustain food, healthcare, and education support throughout the year.</p>
              </article>
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Support a specific need</h3>
                <p className="text-slate-600">Choose to fund school essentials, water projects, medical costs, housing reconstruction, or funeral support.</p>
              </article>
            </div>
            <DonationCheckoutForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
