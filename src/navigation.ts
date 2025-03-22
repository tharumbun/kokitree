import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {

  links: [
    {
      text: 'Start Here',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Brandable Roots',
      links: [
        {
          text: 'Domain Names',
          href: getPermalink('/homes/domain'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Reviews & How-to',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'kokitree',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Brandable Domain Names', href: 'domain' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Astro', href: '#' },
        { text: 'JamStack', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Blog', href: 'blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
 · All rights reserved.
  `,
};
