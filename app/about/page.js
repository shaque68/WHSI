import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'About Us | World Humanity Services Inc.',
  description: 'Learn about World Humanity Services and our mission to serve vulnerable communities with compassion and practical support.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">Who we are</p>
            <h1 className="page-title">
              Compassion in action can create a stronger future for everyone.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              World Humanity Services pairs compassion with practical action to help people overcome hardship, access essential support, and build brighter futures.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-surface p-8">
              <h2 className="mb-4 font-display text-3xl font-semibold text-slate-900">Our story</h2>
              <p className="mb-4 text-slate-600">
                Since our founding, we have been dedicated to fulfilling our Islamic responsibility to humanity by helping people overcome hardship and build brighter futures.
              </p>
              <p className="text-slate-600">
                Through our programs, we support students, provide food and essential aid, develop water projects, and help families with housing, healthcare, and funeral expenses during difficult times.
              </p>
            </div>
            <div className="card-surface p-8">
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">Our values</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Compassionate service rooted in dignity</li>
                <li>• Support for the underserved and vulnerable</li>
                <li>• Practical aid that lifts families beyond crisis</li>
                <li>• Steady care for both local and international communities</li>
              </ul>
              <p className="mt-6 text-lg font-semibold text-brand-700">No difficulty is too great to overcome.</p>
            </div>
          </div>
        </section>

        <section className="section-shell bg-slate-100/70">
          <div className="container-shell">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="eyebrow">How we work</p>
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">People-first programs with measurable care.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Serve with empathy</h3>
                <p className="text-slate-600">We meet immediate needs with respect, urgency, and care so families can move forward with dignity.</p>
              </article>
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Respond with action</h3>
                <p className="text-slate-600">We provide food, water, healthcare support, shelter, and reconstruction help where it is needed most.</p>
              </article>
              <article className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Build for the future</h3>
                <p className="text-slate-600">We create opportunities for education, stability, and long-term resilience for vulnerable communities.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
