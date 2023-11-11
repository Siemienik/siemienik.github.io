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
      appId: 'SLQPPWS57A',
      apiKey: '6999d6afdf94eeec865cb0661be928a3',
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
        {to: '/docs/', position: 'right', label: 'DOCS:', activeBasePath: 'docs'},
        {to: '/docs/xlsx-renderer/', position: 'right', label: 'XLSX-Renderer', activeBasePath: 'docs/xlsx-renderer'},
        {to: '/docs/xlsx-import/', position: 'right', label: 'XLSX-Import', activeBasePath: 'docs/xlsx-import'},
        {to: '/docs/exceljs/', position: 'right', label: 'ExcelJS', activeBasePath: 'docs/exceljs'},
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Documentation', to: '/docs/'},
            {label: '➔ XLSX-Renderer', to: '/docs/xlsx-renderer'},
            {label: '➔ XLSX-Import', to: '/docs/xlsx-import'},
            {label: '➔ ExcelJS', href: '/docs/exceljs'},
          ],
        },
        {
          title: 'Links',
          items: [
            {label: 'Releases', to: '/blog/tags/release'},
            {label: 'Sponsoring', href: 'https://github.com/sponsors/siemienik'},
            {label: 'GitHub Exceljs', href: 'https://github.com/exceljs/exceljs'},
            {label: 'Github XToolset', href: 'https://github.com/siemienik/xtoolset'},
          ],
        },
        {
          items: [
            {html: '<a href="https://discord.gg/siema"><img src="https://discordapp.com/api/guilds/976854442009825321/widget.png?style=banner1" alt="Discord server"></a>'}
          ]
        }
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
