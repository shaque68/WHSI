import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import PageIntro from '../components/PageIntro';

export const metadata = {
  title: 'News and updates',
  description: 'News and updates from World Humanity Services.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <PageIntro
          eyebrow="News and updates"
          title="Stories from our work."
          description="We’ll share organization updates here when they’re available."
        />
        <section className="section-shell">
          <div className="container-shell max-w-3xl">
            <p className="text-slate-600">
              For current information about our programs, please get in touch with our team.
            </p>
            <a href="/contact" className="btn-ghost mt-6">
              Contact us
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
