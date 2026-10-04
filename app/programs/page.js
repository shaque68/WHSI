import Image from 'next/image';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';
import { programs } from '../../lib/content';

export const metadata = {
  title: 'Programs',
  description:
    'Explore World Humanity Services programs in education, food and water aid, healthcare, housing, and funeral assistance.',
  alternates: { canonical: '/programs' },
};

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="Our programs"
          title="Practical help for people facing hardship."
          description="We support essential needs and opportunities for individuals and families in the U.S. and abroad."
        />
        <section className="section-shell">
          <div className="container-shell">
            <div className="mb-10">
              <div className="max-w-2xl">
                <p className="eyebrow">Our work in focus</p>
                <h2 className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
                  Support for essential needs.
                </h2>
              </div>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src="/images/programs/education-access.webp"
                    alt="Students riding together on a school bus"
                    width={1280}
                    height={793}
                    unoptimized
                    className="h-48 w-full object-cover"
                  />
                  <figcaption className="p-4 font-semibold text-brand-900">Education</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src="/images/programs/water-support.webp"
                    alt="Hands collecting water above a body of water"
                    width={1280}
                    height={853}
                    unoptimized
                    className="h-48 w-full object-cover"
                  />
                  <figcaption className="p-4 font-semibold text-brand-900">Clean water</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src="/images/programs/food-assistance.webp"
                    alt="An older woman holding a bowl"
                    width={700}
                    height={1050}
                    unoptimized
                    className="h-48 w-full object-cover"
                  />
                  <figcaption className="p-4 font-semibold text-brand-900">Food assistance</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src="/images/programs/community-relief.webp"
                    alt="People walking through a flooded residential area"
                    width={1280}
                    height={853}
                    unoptimized
                    className="h-48 w-full object-cover"
                  />
                  <figcaption className="p-4 font-semibold text-brand-900">Community care</figcaption>
                </figure>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <article key={program.title} className="border-t-2 border-brand-500 pt-5">
                  <h2 className="mb-2 text-lg font-semibold text-brand-900">{program.title}</h2>
                  <p className="text-sm leading-7 text-slate-600">{program.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-14 flex flex-col gap-5 rounded-2xl bg-brand-900 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <h2 className="font-display text-2xl font-semibold">Help make care possible.</h2>
                <p className="mt-2 text-sm text-white/75">Your support helps sustain our community programs.</p>
              </div>
              <a href="/donate" className="btn-primary self-start sm:self-auto">
                Give today
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
