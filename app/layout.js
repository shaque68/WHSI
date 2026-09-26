import './globals.css';

export const metadata = {
  metadataBase: new URL('https://worldhumanityservices.org'),
  title: {
    default: 'World Humanity Services Inc.',
    template: '%s | World Humanity Services Inc.',
  },
  description:
    'World Humanity Services supports education, food and water aid, healthcare, housing, and funeral relief for vulnerable communities in the U.S. and abroad.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'World Humanity Services Inc.',
    description:
      'Compassionate support for education, food and water aid, healthcare, housing, and funeral relief.',
    url: 'https://worldhumanityservices.org',
    siteName: 'World Humanity Services Inc.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Humanity Services Inc.',
    description:
      'Compassionate support for education, food and water aid, healthcare, housing, and funeral relief.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
