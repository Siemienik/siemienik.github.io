/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Siemienik.com',
  tagline: 'Consulting Services',
  url: 'https://siemienik.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicons/favicon.ico',
  organizationName: 'Siemienik',
  projectName: 'Siemienik.com',
  themeConfig: {
    navbar: {
      title: 'Siemienik Paweł',
      logo: {
        alt: 'Siemienik',
        src: 'img/SIEMIENIK-sygnet.png',
        srcDark: 'img/SIEMIENIK-sygnet-white.png'
      },
      items: [
        {to: '/', label: 'Blog', position: 'left', activeBasePath:'blog/'},
        // {to: '/contact', label: 'Contact', position: 'left', activeBaseRegex:'contact$'},
        // {to: '/docs/', position: 'right', label: 'Documentation', activeBaseRegex:'docs/$', items:[
        //   {to: '/docs/xtoolset/', position: 'right', label: 'XToolset', activeBasePath:'docs/xtoolset/'},
        //   {to: '/docs/exceljs/', position: 'right', label: 'ExcelJS', activeBasePath:'docs/exceljs/'}
        // ]},

      ],
    },
    footer: {
      // style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'XToolset',
      //         to: '/docs/xtoolset/intro',
      //       },
      //       {
      //         label: 'ExcelJS',
      //         to: '/docs/exceljs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Useful',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/',
      //       },
      //       {
      //         label: 'Contact',
      //         to: '/contact',
      //       },
      //       {
      //         label: 'Gitter',
      //         href: 'https://gitter.im/siemienik/community',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/siemienik',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Siemienik Paweł.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/siemienik/siemienik.com/edit/master/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath:'/',
          editUrl: 'https://github.com/siemienik/siemienik.com/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
