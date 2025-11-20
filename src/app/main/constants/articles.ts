import { TArticle } from '../components/FeaturesArticles'

export const ARTICLES: TArticle[] = [
  {
    id: 1,
    title:
      'How Prebid.js Helps Websites Increase Ad Revenue Without Hurting User Experience',
    description:
      'Technical optimization meets business impact. In my article, I explain how Prebid.js improved ad efficiency, user experience, and revenue — all through smart frontend architecture.',
    imageUrl: '/images/how_prebid_boosts_revenue.webp',
    href: 'https://medium.com/@andrey93077/how-prebid-js-helps-websites-increase-ad-revenue-without-hurting-user-experience-1e0c1adac0a4',
  },
  {
    id: 2,
    title:
      'How to Integrate Google, Prebid and (Amazon) — Complete Setup Guide',
    description:
      'Modern header bidding setups often combine Google Publisher Tag (GPT.js), Prebid.js and Amazon Publisher Services (APS / apstag). The goal: run all demand sources in parallel, merge their bids, and send the highest value into Google Ad Manager (GAM) — without breaking latency budgets.',
    imageUrl: '/images/gptjs_prebid_amazon.webp',
    href: 'https://medium.com/@andrey93077/how-to-integrate-gpt-js-prebid-js-and-apstag-js-amazon-complete-setup-guide-dd49a7ea1164',
  },
  {
    id: 3,
    title: 'GDPR and Advertising: A Deep Dive Into Doing It the Right Way',
    description:
      'A deep dive into implementing website advertising in full GDPR compliance — from understanding consent requirements to integrating CMPs, blocking ad scripts.',
    imageUrl: '/images/gdpr_consent_adv.webp',
    href: 'https://medium.com/@andrey93077/gdpr-and-advertising-a-deep-dive-into-doing-it-the-right-way-629e8e375b44',
  },
]
