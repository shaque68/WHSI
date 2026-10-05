import Image from 'next/image';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { programs } from '../lib/content';

const featuredImages = [
  {
    ...programs[0],
    src: '/images/programs/education-support.webp',
    alt: 'Students gathered around a laptop in a classroom',
    width: 1280,
    height: 893,
  },
  {
    ...programs[1],
    src: '/images/programs/water-support.webp',
    alt: 'Hands collecting water above a body of water',
    width: 1280,
    height: 853,
  },
  {
    title: 'Community relief',
    description: 'Supporting people and communities through difficult times.',
    src: '/images/programs/community-relief.webp',
    alt: 'People walking through a flooded residential area',
    width: 1280,
    height: 853,
  },
];

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
                We bring hope, support, and dignity to people facing hardship
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

            <aside className="relative min-h-80 overflow-hidden rounded-3xl sm:min-h-[26rem]">
              <Image
                src="/images/programs/community-support.webp"
                alt="A woman standing among temporary shelters in a community"
                width={1280}
                height={853}
                priority
                unoptimized
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                  Here when it matters
                </p>
                <p className="mt-2 max-w-sm text-xl font-semibold leading-snug">
                  Practical support for people and communities facing hardship.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Programs in focus</p>
              <h2 className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
                See the needs we work to address.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {featuredImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    unoptimized
                    className="h-auto w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-brand-900">{image.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{image.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#f1f3ec]">
          <div className="container-shell">
            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h2 className="text-lg font-semibold text-brand-900">Real Help Where It Matters</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We work close to communities to understand their needs and provide real help where it matters.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h2 className="text-lg font-semibold text-brand-900">Give Lasting Hope</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Your generosity helps people access essentials and opportunities for a brighter future.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h2 className="text-lg font-semibold text-brand-900">Serve With Dignity</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We meet people with compassion and respect, recognizing each person’s needs and circumstances.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-brand-900 py-12 text-white sm:py-14">
          <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-light">Here for our community</p>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Looking for support?
              </h2>
              <p className="mt-2 text-white/80">
                If you or someone you know is facing hardship, contact us to ask about our programs and community support.
              </p>
            </div>
            <a href="/contact" className="btn-primary self-start sm:self-auto">
              Ask about support
            </a>
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
