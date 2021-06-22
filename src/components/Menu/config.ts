import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: 'https://exchange.candyswapliquidity.io/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.candyswapliquidity.io/#/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: '/pool',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://candyswapliquidity.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://candyswapliquidity.io/pools',
  },


  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://candyswapliquidity.io/teams',
      },
      {
        label: 'Task Center',
        href: 'https://candyswapliquidity.io/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://candyswapliquidity.io/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
      {
        label: 'CANDY Token',
        href: 'https://bscscan.com/address/0xC10d6fEc060745809D1c8836B80B1F2f74b7B60a',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://candyswapliquidity.io/#',
    status: {
      text: 'COMING SOON',
      color: 'warning',
    },
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/candydefi',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
