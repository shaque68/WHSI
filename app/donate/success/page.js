import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import DonationStatus from '../../components/DonationStatus';

export const metadata = {
  title: 'Donation status',
  description: 'Check the status of your World Humanity Services donation.',
  robots: { index: false, follow: false },
};

export default function DonationSuccessPage() {
  return (
    <>
      <SiteHeader />
      <main id="content-start">
        <section className="section-shell">
          <div className="container-shell max-w-2xl py-8 text-center sm:py-12">
            <DonationStatus />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/" className="btn-primary">Return home</a>
              <a href="/contact" className="btn-ghost">Contact our team</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
