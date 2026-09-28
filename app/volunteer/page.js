import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';

export const metadata = {
  title: 'Volunteer',
  description:
    'Explore ways to volunteer with World Humanity Services and support community care.',
  alternates: { canonical: '/volunteer' },
};

const opportunities = [
  {
    title: 'Food and essential aid',
    description: 'Support food pantry activities and aid distribution.',
  },
  {
    title: 'Education outreach',
    description: 'Help with student support and school supply efforts.',
  },
  {
    title: 'Community and fundraising',
    description: 'Share your time and skills to support community initiatives.',
  },
];

export default function VolunteerPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="Get involved"
          title="Bring your time and talents to the work."
          description="We welcome people who want to support their communities through service and practical care."
        />
        <section className="section-shell">
          <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="eyebrow">Ways to help</p>
              <div className="mt-2 divide-y divide-slate-200 border-y border-slate-200">
                {opportunities.map((item) => (
                  <article key={item.title} className="py-5">
                    <h2 className="font-semibold text-brand-900">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="self-start rounded-2xl bg-brand-900 p-7 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                Start a conversation
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold">
                Tell us how you’d like to help.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Email us directly and include a little about your interests and availability.
              </p>
              <a
                href="mailto:info@worldhumanityservices.org?subject=Volunteer%20interest"
                className="btn-primary mt-6 w-full"
              >
                Email about volunteering
              </a>
              <p className="mt-4 text-center text-xs text-white/65">
                This opens your email app; it does not submit a website form.
              </p>
              <a href="/contact" className="mt-4 block text-center text-sm font-medium text-white underline decoration-white/40 underline-offset-4 hover:text-amber-200">
                View all contact details
              </a>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
