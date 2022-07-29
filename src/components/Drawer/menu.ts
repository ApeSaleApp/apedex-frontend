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
