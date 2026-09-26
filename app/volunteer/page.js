import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import InquiryForm from '../components/InquiryForm';

export const metadata = {
  title: 'Volunteer | World Humanity Services Inc.',
  description: 'Volunteer with World Humanity Services to support food pantries, education outreach, and community service events.',
};

const volunteerFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'interest', label: 'How you would like to help', type: 'select', options: ['Food pantry support', 'Education outreach', 'Fundraising', 'Special events'] },
  { name: 'message', label: 'Tell us a little about yourself', type: 'textarea' },
];

export default function VolunteerPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">Get involved</p>
            <h1 className="page-title">
              Put your time and talents to work for stronger communities.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              We welcome people from every background who want to make a meaningful difference through service, compassion, and practical support.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Food pantry and aid distribution</h3>
                <p className="text-slate-600">Help organize support for families through pantry operations, food delivery, and humanitarian outreach.</p>
              </article>
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Education sponsorship support</h3>
                <p className="text-slate-600">Assist with student support outreach, school supply drives, and community education efforts.</p>
              </article>
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Fundraising and community events</h3>
                <p className="text-slate-600">Offer your time and professional skills to support awareness campaigns, donor events, and special projects.</p>
              </article>
            </div>
            <InquiryForm
              title="Volunteer interest form"
              description="Share a few details and we will reach out about upcoming opportunities."
              fields={volunteerFields}
              submitLabel="Send interest"
              successMessage="Thank you! We received your message and will reach out soon."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
