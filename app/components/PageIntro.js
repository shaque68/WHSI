export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 py-14 text-white sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border-[5rem] border-white/[0.035]"
      />
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h1 className="page-title text-white">{title}</h1>
          {description ? <p className="hero-text-light mt-5 max-w-2xl">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}
