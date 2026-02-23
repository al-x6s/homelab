import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Homelab alx6s',
  tagline: 'Infra, Kubernetes, SysOps & CNCF',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ GitHub Pages: https://al-x6s.github.io/homelab/
  url: 'https://al-x6s.github.io',
  baseUrl: '/homelab/',
  trailingSlash: false,

  // ✅ Repo GitHub
  organizationName: 'al-x6s',
  projectName: 'homelab',

  onBrokenLinks: 'throw',

  // ✅ Language
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // ✅ "Edit this page" links point to YOUR repo
          editUrl: 'https://github.com/al-x6s/homelab/tree/main/',
          // Optional: good default route
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // ✅ "Edit this page" links point to YOUR repo
          editUrl: 'https://github.com/al-x6s/homelab/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Homelab alx6s',
      logo: {
        alt: 'Homelab',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // Ces routes supposent que tu crées ces pages:
        // docs/homelab/overview.md  et docs/roadmap.md
        {to: '/docs/homelab/overview', label: 'Homelab', position: 'left'},
        {to: '/docs/roadmap', label: 'Roadmap', position: 'left'},

        {to: '/blog', label: 'Lab Notes', position: 'left'},

        {
          href: 'https://github.com/al-x6s/homelab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Homelab', to: '/docs/homelab/overview'},
            {label: 'Roadmap', to: '/docs/roadmap'},
            {label: 'Intro', to: '/docs/intro'},
          ],
        },
        {
          title: 'Liens',
          items: [{label: 'GitHub', href: 'https://github.com/al-x6s/homelab'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} al-x6s. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
