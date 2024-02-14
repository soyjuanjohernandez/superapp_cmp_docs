// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Superapp components',
  tagline: 'Librería de componentes',
  favicon: 'img/favicon.ico',

  // Establezca la URL de producción de su sitio aquí
  url: 'https://your-docusaurus-site.example.com',
  // Establecer el/ <saseurl>/ rathName debajo del cual se sirve su sitio
  // Para la implementación de las páginas de GitHub, a menudo es '/<ProjectName>/'
  baseUrl: '/',

  //Configuración de implementación de páginas GitHub.
  // Si no está usando páginas GitHub, no las necesita.
  organizationName: 'Claro', // Generalmente tu GitHub org/user name.
  projectName: 'superappComponents', // Generalmente tu repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Incluso si no usa la internacionalización, puede usar este campo para establecer
  // metadatos útiles como html lang.Por ejemplo, si su sitio es chino,
  // puede querer reemplazar "conwith "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://www.google.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://www.google.com',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Claro superapp',
        logo: {
          alt: 'Claro superapp',
          src: 'img/claro.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'componentsSidebar',
            position: 'left',
            label: 'Componentes',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: '#',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} CLARO.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
