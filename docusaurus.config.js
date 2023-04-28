/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Siemienik Paweł',
  tagline: 'The Open Source Software Enthusiast',
  url: 'https://siemienik.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicons/favicon.ico',
  organizationName: 'siemienik',
  projectName: 'siemienik.com',
  themeConfig: {
    algolia: {
      appId: 'todo',
      apiKey: 'e552182743ab25e516c07c2754ce9c90',
      indexName: 'siemienik',
    },
    navbar: {
      title: 'Siemienik',
      logo: {
        alt: 'Siemienik',
        src: 'img/SIEMIENIK-sygnet-kwadrat-brown-small.png'
      },
      items: [
        {to: '/blog/', label: 'Blog', position: 'left', activeBasePath: 'blog/'},
        {to: '/pawel', label: 'About me', position: 'left', activeBaseRegex: '^/pawel&'},
        // {to: '/tags/portfolio', label: 'Portfolio', position: 'left', activeBaseRegex: '(tags/)?portfolio'},
        {to: '/docs/',  label: 'Documentation', activeBasePath: 'docs/'},
        // {to: '/docs/', position: 'right', label: 'Documentation', activeBasePath: 'docs/', items:[
        //   {to: '/docs/xtoolset/', position: 'right', label: 'XToolset', activeBaseRegex: 'docs/[^e].*/'},
        //   {to: '/docs/exceljs/', position: 'right', label: 'ExcelJS', activeBasePath: 'docs/exceljs/'}
        // ]},
        {to: 'https://github.com/sponsors/siemienik', position: 'right', label: 'GitHub'},

      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'XToolset', to: '/docs/xtoolset/' },
            { label: '➔ XLSX-Renderer', to: '/docs/xlsx-renderer' },
            { label: '➔ XLSX-Import', to: '/docs/xlsx-import' },
            { label: 'ExcelJS', href: 'https://github.com/exceljs/exceljs#exceljs' },
          ],
        },
        {
          title: 'Details',
          items: [
            // { label: 'Contact', to: '/contact' },
            { label: 'Gitter', href: 'https://gitter.im/siemienik/community' },
            // { label: 'LinkedIn', href: 'https://gitter.im/siemienik/community' },
            { label: 'GitHub', href: 'https://github.com/siemienik' },
          ],
        },
        {
          title: 'Useful links',
          items: [
            { label: 'About me', to: '/pawel' },
            { label: 'Sponsor me', href: 'https://github.com/sponsors/siemienik' },
            { label: 'Github XToolset', href: 'https://github.com/siemienik/xtoolset' },
            { label: 'GitHub Exceljs', href: 'https://github.com/exceljs/exceljs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Siemienik Paweł. <br/> Content licensed on <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/siemienik/siemienik.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/siemienik/siemienik.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
