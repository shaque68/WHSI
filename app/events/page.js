import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';

export const metadata = {
  title: 'Events',
  description: 'Events and community opportunities from World Humanity Services.',
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="Community"
          title="Come together to make a difference."
          description="Event details will be shared here when they are available."
        />
        <section className="section-shell">
          <div className="container-shell max-w-3xl">
            <p className="text-slate-600">
              Interested in getting involved? Reach out to ask about current opportunities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="btn-ghost">Contact us</a>
              <a href="/volunteer" className="btn-primary">Volunteer</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
