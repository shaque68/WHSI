import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import InquiryForm from '../components/InquiryForm';

export const metadata = {
  title: 'Contact | World Humanity Services Inc.',
  description: 'Get in touch with World Humanity Services to ask about donations, volunteering, or community support.',
};

const contactFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
  { name: 'message', label: 'How can we help?', type: 'textarea' },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">Contact us</p>
            <h1 className="page-title">
              Connect with us about our programs, partnerships, or ways to help.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              We welcome questions about giving, volunteering, sponsorships, and community partnerships.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <article className="card-surface p-7">
                <h2 className="mb-3 text-xl font-semibold text-slate-900">Email</h2>
                <a className="text-brand-700 hover:text-brand-900" href="mailto:info@worldhumanityservices.org">
                  info@worldhumanityservices.org
                </a>
              </article>
              <article className="card-surface p-7">
                <h2 className="mb-3 text-xl font-semibold text-slate-900">Phone</h2>
                <a className="text-brand-700 hover:text-brand-900" href="tel:+17182192207">
                  +1 (718) 219-2207
                </a>
              </article>
              <article className="card-surface p-7">
                <h2 className="mb-3 text-xl font-semibold text-slate-900">Visit</h2>
                <p className="text-slate-600">129 N Grove Street<br />Freeport, NY 11520</p>
              </article>
            </div>
            <InquiryForm
              title="Send us a message"
              description="Share your details and we will follow up as soon as possible."
              fields={contactFields}
              submitLabel="Send message"
              successMessage="Thank you! We received your message and will reach out soon."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
