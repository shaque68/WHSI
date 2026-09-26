import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { blogPosts } from '../../lib/content';

export const metadata = {
  title: 'Blog | World Humanity Services Inc.',
  description: 'Read the latest stories and updates from World Humanity Services.',
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900 py-20 text-white">
          <div className="container-shell">
            <p className="eyebrow eyebrow-light">News and stories</p>
            <h1 className="page-title">
              Updates from our team, partners, and communities we serve.
            </h1>
            <p className="hero-text-light mt-6 max-w-2xl">
              Follow our service projects, community partnerships, and stories of hope.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="card-surface p-7">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">{post.date}</p>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="text-slate-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
