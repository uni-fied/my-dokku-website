// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jurnal Kodinganku!',
  tagline: 'Hi, Selamat datang di Jurnal Kodinganku!, Share knowladge, Tutorial, Tips & Trik, Bug Fix & Problem Solving, dan banyak Lagi, Yuk pelajari jurnalnya sekarang. Stay focus & Improve your skill.',
  url: 'https://github.com',
  baseUrl: '/my-dokku-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/astronaut.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uni-fied', // Usually your GitHub org/user name.
  projectName: 'my-dokku-website', // Usually your repo name.

  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Un-comment jika ingin ada url buat edit pages
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Un-comment jika ingin ada url buat edit pages / blog
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jurnal Kodinganku!',
        logo: {
          alt: 'Pavicon Jurnal Kodinganku!',
          src: 'img/astronaut.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Research & Development',
          },
          {
            to: '/blog', 
            label: 'Blog Post', 
            position: 'left'
          },
          {
            href: 'https://github.com/uni-fied/',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        logo: {
          alt: 'Astronaut Star',
          src: 'img/astronaut.png',
          href: '/',
          width: 55,
          height: 55,
        },
        style: 'dark',
        copyright: `Copyright © 2022-${new Date().getFullYear()} Asep Septiadi, Built with ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
