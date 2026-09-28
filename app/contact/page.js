import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';

export const metadata = {
  title: 'Contact',
  description:
    'Contact World Humanity Services with questions about programs, donations, volunteering, or community support.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="Contact"
          title="We’re here to connect."
          description="Reach out with questions about our programs, partnerships, or ways to get involved."
        />
        <section className="section-shell">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="font-display text-3xl font-semibold text-brand-900">
                Talk with our team.
              </h2>
              <p className="mt-3 text-slate-600">
                Email or call us directly. We’re glad to hear from you.
              </p>
            </div>
            <address className="not-italic">
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-slate-500">Email</dt>
                  <dd>
                    <a className="font-medium text-brand-700 hover:text-brand-900" href="mailto:info@worldhumanityservices.org">
                      info@worldhumanityservices.org
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-slate-500">Phone</dt>
                  <dd>
                    <a className="font-medium text-brand-700 hover:text-brand-900" href="tel:+17182192207">
                      +1 (718) 219-2207
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-slate-500">Address</dt>
                  <dd className="text-slate-700">129 N Grove Street<br />Freeport, NY 11520</dd>
                </div>
              </dl>
            </address>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
