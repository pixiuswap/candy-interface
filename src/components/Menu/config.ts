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
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: 'https://candyswapliquidity.io/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://candyswapliquidity.io/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://candyswapliquidity.io/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://candyswapliquidity.io/competition',
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
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://candyswapliquidity.io/ifo',
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
