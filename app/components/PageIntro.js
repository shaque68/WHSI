export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="border-b border-brand-900/5 bg-[#f1f3ec] py-14 sm:py-16 lg:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title text-brand-900">{title}</h1>
          {description ? <p className="hero-text mt-5 max-w-2xl">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}
