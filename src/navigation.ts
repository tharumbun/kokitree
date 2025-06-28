import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {

  links: [
    {
      text: 'Marketplace',
      links: [
        {
          text: 'Brandable Domain Names',
          href: getPermalink('/marketplace/domain'),
        },
        {
          text: 'Website & blog ',
          href: getPermalink('/marketplace/weblog'),
        },        
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Kokitree',
          href: getPermalink('/about'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
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
      title: 'Marketplace',
      links: [
        { text: 'Brandable Domain Names', href: 'https://kokitree.com/marketplace/domain' },
        { text: 'Website & blog', href: 'https://kokitree.com/marketplace/weblog' },
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
