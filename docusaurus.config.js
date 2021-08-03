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
    navbar: {
      title: 'Siemienik Paweł',
      logo: {
        alt: 'Siemienik',
        src: 'img/SIEMIENIK-sygnet-kwadrat-brown-small.png'
      },
      items: [
        // {to: '/', label: 'Blog', position: 'left', activeBasePath: 'blog/'},
        // {to: '/contact', label: 'Contact', position: 'left', activeBaseRegex: 'contact$'},
        // {to: '/tags/portfolio', label: 'Portfolio', position: 'left', activeBaseRegex: '(tags/)?portfolio'},
        {to: '/docs/',  label: 'Documentation', activeBasePath: 'docs/'},
        // {to: '/docs/', position: 'right', label: 'Documentation', activeBasePath: 'docs/', items:[
        //   {to: '/docs/xtoolset/', position: 'right', label: 'XToolset', activeBaseRegex: 'docs/[^e].*/'},
        //   {to: '/docs/exceljs/', position: 'right', label: 'ExcelJS', activeBasePath: 'docs/exceljs/'}
        // ]},

      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            // { label: 'XToolset', to: '/docs/xtoolset/' },
            { label: '➔ XLSX-Renderer', to: '/docs/xlsx-renderer' },
            { label: '➔ XLSX-Import', to: '/docs/xlsx-import' },
            // { label: 'ExcelJS', to: '/docs/exceljs/intro' },
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
            { label: 'Sponsor me', href: 'https://github.com/sponsors/siemienik' },
            { label: 'Github XToolset', href: 'https://github.com/siemienik/xtoolset' },
            // { label: 'GitHub Exceljs', href: 'https://github.com/exceljs/exceljs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Siemienik Paweł.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/siemienik/siemienik.com/edit/master/',
        },
        blog: false && {
          showReadingTime: true,
          routeBasePath: '/',
          editUrl: 'https://github.com/siemienik/siemienik.com/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
