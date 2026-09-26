import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { programs } from '../../lib/content';

export const metadata = {
  title: 'Programs | World Humanity Services Inc.',
  description: 'Explore World Humanity Services programs in education, food and water aid, healthcare, housing, and funeral support.',
};

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">What we do</p>
            <h1 className="page-title">
              We meet urgent needs while helping communities build a more stable future.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              Our programs provide education support, food and water assistance, healthcare relief, housing support, and funeral assistance for people facing hardship in the U.S. and abroad.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="card-surface p-7">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="text-slate-600">{program.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell bg-slate-100/70">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">How to support</p>
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Your generosity keeps our programs responsive and community-centered.</h2>
              <p className="hero-text mt-4 max-w-2xl">When you give, volunteer, or share our work, you help families access essential support and create lasting change in their communities.</p>
              <Link href="/donate" className="btn-primary mt-6">
                Make a gift
              </Link>
            </div>
            <div className="card-surface p-8">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Areas of support</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Education and school essentials</li>
                <li>• Monthly food assistance and water projects</li>
                <li>• Healthcare, housing, and funeral relief</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
