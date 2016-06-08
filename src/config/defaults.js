var config = {};
config.env = process.env.NODE_ENV || 'development';
config.defaultSitemapConfig = {
  targetDirectory: `${process.cwd()}/tmp/sitemaps/${config.env}`,
  sitemapIndex: "sitemap.xml",
  sitemapRootUrl: "http://www.mysite.com",
  sitemapFileDirectory: "/sitemaps",
  maxUrlsPerFile: 50000,
  urlBase: "http://www.mysite.com"
};
config.logConfig = {
  name: "sitemapper",
  level: "debug"
};
config.sitemapIndexHeader = '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
config.sitemapHeader = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9/" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
config.defaultUrlFormatter = (options) => {
  return (href) => {
    if ('/' == href) {
      return options.urlBase;
    } else if (href && href.length && href[0] == '/') {
      return `${options.urlBase}${href}`;
    } else if (href && href.length && href.match(/^https?:\/\//)) {
      return href;
    } else {
      if (href.length) {
        return `${options.urlBase}/${href}`;
      } else {
        return options.urlBase;
      }
    }
  };
};

module.exports = config;