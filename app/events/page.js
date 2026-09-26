import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { events } from '../../lib/content';

export const metadata = {
  title: 'Events | World Humanity Services Inc.',
  description: 'See upcoming World Humanity Services events and community service opportunities.',
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">Upcoming events</p>
            <h1 className="page-title">
              Gather with us for service, education, and community connection.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              Join food drives, school-support efforts, wellness gatherings, and fundraising events that bring our community together.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="card-surface p-7">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">{event.date}</p>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{event.title}</h3>
                <p className="text-slate-600">{event.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
