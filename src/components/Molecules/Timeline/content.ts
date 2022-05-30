import { Tab } from '../Tabs';
import { ROADMAP_TABS_VALUES } from '../../../enums';
import { TimelineItemProps } from '../../Atoms/TimelineItem';

/**
 * Tabs roadmap content
 */
export const ROADMAP_TABS_HEADER: Array<Tab> = [
  {
    name: 'DONE',
    value: ROADMAP_TABS_VALUES.DONE,
  },
  {
    name: 'IN PROGRESS',
    value: ROADMAP_TABS_VALUES.IN_PROGRESS,
  },
  {
    name: 'TO DO',
    value: ROADMAP_TABS_VALUES.TODO,
  },
];

/**
 * Roadmap content
 */
type TimelineGroupItemProps = {
  [key in ROADMAP_TABS_VALUES]: Array<TimelineItemProps>;
};
export const ROADMAP_TABS_CONTENT: TimelineGroupItemProps = {
  /**
   * ROADMAP ITEMS DONE
   */
  [ROADMAP_TABS_VALUES.DONE]: [
    {
      additionalInfo: 'DONE',
      title: 'EVM',
      body: ['Staking dashboard', 'HDX Bonds (DAI and wETH)'],
    },
    {
      additionalInfo: 'DONE',
      title: 'DEX',
      body: [
        'Lazarus testnet setup',
        'BTC/USDC pair(testnet)',
        'Activated Vortex',
      ],
    },
    {
      additionalInfo: 'DONE',
      title: 'PR',
      body: ['Reach out to tracking pages', 'Coin listing'],
    },
    {
      additionalInfo: 'DONE',
      title: 'DEX',
      body: ['Lazarus Testnet release'],
    },
    {
      additionalInfo: 'DONE',
      title: 'EVM',
      body: ['Liquidity provider bonds', 'Bridge proof of concept'],
    },
  ],
  /**
   * ROADMAP ITEMS IN PROGRESS
   */
  [ROADMAP_TABS_VALUES.IN_PROGRESS]: [
    {
      additionalInfo: 'IN PROGRESS',
      title: 'EVM',
      body: [
        'Coin Swap',
        'Investigate lower APY',
        'Present the initial version of HDX tokenomics',
      ],
    },
    {
      additionalInfo: 'IN PROGRESS',
      title: 'DEX',
      body: [
        'Implement the guides tab',
        'Add localization support (languages)',
        'L2 active enhancements (make all pairs online simultaneously)',
      ],
    },
    {
      additionalInfo: 'IN PROGRESS',
      title: 'MARKETING / PR',
      body: [
        'Build long-term strategy',
        'Build partnerships',
        'Improve data tracking',
      ],
    },
  ],
  /**
   * ROADMAP ITEMS PLANNED
   */
  [ROADMAP_TABS_VALUES.TODO]: [
    {
      additionalInfo: 'TODO',
      title: 'EVM',
      body: ['Burn unswapped HDX', 'Audit of our HDX smart contracts'],
    },
    {
      additionalInfo: 'TODO',
      title: 'ORDERBOOK',
      body: [
        'Implement DEX refunds',
        'Implement maker payments',
        'Integrate Arbitrum network',
      ],
    },
    {
      additionalInfo: 'TODO',
      title: 'DEX',
      body: [
        'Release the final SSUI',
        'Investigate feasbility of integrating Arbitrum into the DEX',
      ],
    },
    {
      additionalInfo: 'TODO',
      title: 'MARKETING / PR',
      body: ['Research possible liquidity providers'],
    },
    {
      additionalInfo: 'TODO',
      title: 'RESEARCH',
      body: [
        'Investigate HDX DEX rewards',
        'EVM Scaling solutions (Q3)',
        'Enhance DEX UX (Q3)',
      ],
    },
  ],
};
