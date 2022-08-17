interface IMenu {
  id: number
  name: string
  path: string
  icon: string
}
export const menu: IMenu[] = [
  {
    id: 1,
    name: 'Exchange',
    path: '/exchange',
    icon: 'icon-exchange',
  },
  {
    id: 2,
    name: 'Launchpad',
    path: '/launchpad',
    icon: 'icon-rocket',
  },
  {
    id: 3,
    name: 'Earn',
    path: '/earn',
    icon: 'icon-pig',
  },
  {
    id: 4,
    name: 'NFT Marketplace',
    path: '/nft-marketplace',
    icon: 'icon-market-place',
  },
  {
    id: 5,
    name: 'Tools',
    path: '/tools',
    icon: 'icon-bag',
  },
  {
    id: 6,
    name: 'Sniper Bots',
    path: '/sniper-bots',
    icon: 'icon-sniper-bot',
  },
  {
    id: 7,
    name: 'News Daily',
    path: '/news-daily',
    icon: 'icon-speaker',
  },
]

export const PARTNER = [
  {
    id: 1,
    url: '',
    icon: '/image-ape/partner/globe.svg',
    iconLight: '/image-ape/partner/globe-light.svg',
  },
  {
    id: 2,
    url: '',
    icon: '/image-ape/partner/envelope.svg',
    iconLight: '/image-ape/partner/envelope-light.svg',
  },
  {
    id: 3,
    url: '',
    icon: '/image-ape/partner/market.svg',
  },
  {
    id: 4,
    url: '',
    icon: '/image-ape/partner/dragon.svg',
  },
  {
    id: 5,
    url: '',
    icon: '/image-ape/partner/discord.svg',
  },
  {
    id: 6,
    url: '',
    icon: '/image-ape/partner/m.svg',
  },
  {
    id: 7,
    url: '',
    icon: '/image-ape/partner/twitter.svg',
  },
  {
    id: 8,
    url: '',
    icon: '/image-ape/partner/telegram.svg',
  },
  {
    id: 9,
    url: '',
    icon: '/image-ape/partner/reddit.svg',
  },
]
