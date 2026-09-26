import Link from 'next/link';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { programs } from '../lib/content';

export const metadata = {
  title: 'World Humanity Services Inc.',
  description: 'World Humanity Services provides education sponsorship, food and water aid, healthcare support, housing assistance, and community care.',
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell max-w-4xl">
            <p className="eyebrow eyebrow-light">Empowering lives through compassionate action</p>
            <h1 className="page-title">
              Helping families move forward with care and dignity.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              World Humanity Services helps people facing hardship with education, food and water, healthcare, housing, funeral assistance, and compassionate community care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary">
                Donate now
              </Link>
              <Link href="/volunteer" className="btn-secondary">
                Volunteer
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="eyebrow">How we help</p>
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Practical support where it matters most.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {programs.slice(0, 3).map((program) => (
                <article key={program.title} className="card-surface p-7">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{program.title}</h3>
                  <p className="text-slate-600">{program.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-slate-100/80">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Support our mission</p>
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Your generosity can help create lasting stability.
              </h2>
              <p className="hero-text mt-4 max-w-2xl">
                Whether you give, volunteer, or share our work, you help us respond with urgency and serve families with dignity.
              </p>
            </div>
            <div className="card-surface p-8">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Get involved today</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/donate" className="btn-primary">
                  Give now
                </Link>
                <Link href="/volunteer" className="btn-ghost">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
