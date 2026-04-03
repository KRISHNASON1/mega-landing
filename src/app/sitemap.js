export default function sitemap() {
  try {
    const baseUrl = 'https://megaenterprise.in';

    // Define all static routes
    const routes = [
      '',
      '/about',
      '/catalog',
      '/contact',
      '/products',
      '/products/lubricants',
      '/products/safety-ppe',
      '/products/lighting',
      '/products/wires-cables',
      '/products/switchgears',
      '/products/panel-accessories',
      '/products/motors',
      '/products/solar',
      '/products/gearboxes',
      '/services',
      '/services/fabrication',
      '/services/electrical-jobs',
    ];

    return routes.map((route) => {
      let priority = 0.8;
      if (route === '') priority = 1.0;
      else if (route === '/contact') priority = 0.9;
      else if (route.startsWith('/products/')) priority = 0.9;

      return {
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority,
      };
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return [];
  }
}
