import Image from 'next/image';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { programs } from '../lib/content';

const featuredImages = [
  {
    title: 'Education support',
    description: 'Helping students access learning and build brighter futures.',
    src: '/images/programs/education-support.webp',
    alt: 'Students gathered around a laptop in a classroom',
    width: 1280,
    height: 893,
  },
  {
    title: 'Food, water & essential aid',
    description: 'Providing clean water and practical help for everyday needs.',
    src: '/images/programs/water-support.webp',
    alt: 'Hands collecting water above a body of water',
    width: 1280,
    height: 853,
  },
  {
    title: 'Food assistance',
    description: 'Standing with families as they work toward greater stability.',
    src: '/images/programs/food-assistance.webp',
    alt: 'An older woman holding a bowl',
    width: 700,
    height: 1050,
  },
  {
    title: 'Learning support',
    description: 'Helping young people access the tools and support to learn.',
    src: '/images/programs/learning-support.webp',
    alt: 'An educator working with students gathered around a table',
    width: 700,
    height: 1050,
  },
  {
    title: 'Education access',
    description: 'Opening pathways to classrooms and new opportunities.',
    src: '/images/programs/education-access.webp',
    alt: 'Students riding together on a school bus',
    width: 1280,
    height: 793,
  },
  {
    title: 'Financial assistance',
    description: 'Providing practical financial support when families need it.',
    src: '/images/programs/financial-assistance.webp',
    alt: 'Hands holding coins',
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
                We bring hope, dignity, and on the ground support to people facing hardship at home and abroad.
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

        <section className="section-shell">
          <div className="container-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Programs in focus</p>
              <h2 className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
                See the needs we work to address.
              </h2>
              <p className="mt-3 text-slate-600">
                These representative images illustrate the kinds of needs our programs address.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {featuredImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    unoptimized
                    className="h-52 w-full object-cover"
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
