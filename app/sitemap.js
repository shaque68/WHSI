export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://worldhumanityservices.org';
  const routes = [
    '',
    '/about',
    '/programs',
    '/volunteer',
    '/donate',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    priority: route === '' ? 1 : 0.8,
  }));
}
