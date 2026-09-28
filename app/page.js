import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { programs } from '../lib/content';

export const metadata = {
  title: { absolute: 'World Humanity Services Inc. | Compassion in action' },
  description:
    'World Humanity Services supports education, food and water aid, healthcare, housing, and funeral relief for people facing hardship.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="relative isolate overflow-hidden bg-brand-900 text-white">
          <div aria-hidden="true" className="absolute -right-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border-[5rem] border-white/[0.035]" />
          <div className="container-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20 lg:py-28">
            <div>
              <p className="eyebrow eyebrow-light">Compassion in action</p>
              <h1 className="page-title max-w-4xl">
                Practical support. Offered with dignity.
              </h1>
              <p className="hero-text-light mt-6 max-w-2xl">
                We help people facing hardship access education, essential aid, healthcare, housing, and care for families in times of loss.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/donate" className="btn-primary">
                  Make a donation
                </a>
                <a href="/programs" className="btn-secondary">
                  Explore our programs
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                Here when it matters
              </p>
              <ul className="mt-5 divide-y divide-white/15">
                <li className="py-4 text-lg font-medium">Support for learning</li>
                <li className="py-4 text-lg font-medium">Help with everyday essentials</li>
                <li className="py-4 text-lg font-medium">Care through difficult times</li>
              </ul>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Rooted in compassion. Focused on practical help.
              </p>
            </aside>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">What we do</p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
                  A helping hand for life’s essentials.
                </h2>
              </div>
              <a href="/programs" className="font-semibold text-brand-700 hover:text-brand-900">
                See all programs <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {programs.slice(0, 3).map((program) => (
                <article key={program.title} className="card-surface p-6 sm:p-7">
                  <h3 className="mb-3 text-lg font-semibold text-brand-900">{program.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{program.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-brand-900/5 bg-[#f1f3ec] py-10 sm:py-12">
          <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-brand-900 sm:text-3xl">
                Be part of practical, compassionate care.
              </h2>
              <p className="mt-2 text-slate-600">
                Give, volunteer, or get in touch to learn more about the work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/volunteer" className="btn-ghost">Volunteer</a>
              <a href="/contact" className="btn-ghost">Contact us</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
