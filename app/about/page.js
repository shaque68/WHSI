import Image from 'next/image';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';

export const metadata = {
  title: 'About',
  description:
    'Learn about World Humanity Services and its mission to serve communities with compassion, dignity, and practical support.',
  alternates: { canonical: '/about' },
};

const commitments = [
  {
    title: 'Lead with dignity',
    description: 'Treat every person with respect, compassion, and care.',
  },
  {
    title: 'Respond to real needs',
    description: 'Focus support on practical essentials and opportunities.',
  },
  {
    title: 'Stand with communities',
    description: 'Serve people facing hardship in the U.S. and abroad.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="About us"
          title="Compassion, put into action."
          description="World Humanity Services helps people facing hardship access practical support and build a more stable future."
        />
        <section className="section-shell">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Our purpose</p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900">
                Care for people. Support for a stronger future.
              </h2>
            </div>
            <div className="space-y-5 text-slate-600">
              <p>
                World Humanity Services is dedicated to fulfilling our Islamic responsibility to humanity by helping people overcome hardship.
              </p>
              <p>
                Our work includes education sponsorship, food and water aid, healthcare, housing, and funeral assistance for families in difficult times.
              </p>
              <a href="/programs" className="inline-flex font-semibold text-brand-700 hover:text-brand-900">
                Explore our programs <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
        <section className="pb-14 sm:pb-16 lg:pb-20">
          <div className="container-shell">
            <figure className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/programs/community-support.webp"
                alt="A woman standing among temporary shelters in a community"
                width={1280}
                height={853}
                unoptimized
                className="h-72 w-full object-cover sm:h-[26rem]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 to-transparent px-6 pb-6 pt-16 text-sm text-white sm:px-8 sm:pb-8">
                Representative imagery of the communities our work seeks to support.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="border-y border-brand-900/5 bg-[#f1f3ec] py-14 sm:py-16">
          <div className="container-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">How we work</p>
              <h2 className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
                Grounded in compassion and practical care.
              </h2>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {commitments.map((item) => (
                <article key={item.title} className="border-t border-brand-900/15 pt-5">
                  <h3 className="font-semibold text-brand-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
