import type {WorkHistoryItem} from '../../types'

import {ExperienceItem} from './ExperienceItem'

const workHistoryData: WorkHistoryItem[] = [
  {
    company: 'Docker',
    title: 'Senior Frontend Engineer',
    startMonth: 'Dec',
    startYear: 2023,
    details: [
      {
        highlight: 'Led frontend architecture',
        content: (
          <>
            for Docker Model Runner, transforming CLI-dependent tool into
            production-ready UI that drove{' '}
            <span className="italic">44% increase</span> in model downloads (90k
            to 130k).
          </>
        ),
      },
      {
        highlight: 'Built cloud-native integration features for Docker Offload',
        content:
          ', implementing seamless context switching between local/cloud environments, GPU resource management, and deep-linking architecture for direct navigation from marketing pages.',
      },
      {
        highlight: 'Implemented real-time streaming for AI model downloads',
        content:
          'using SSE with RxJS throttling, enabling progress visualization for multi-GB LLM downloads without UI thrashing.',
      },
    ],
  },
  {
    company: 'Coinbase',
    title: 'Senior Frontend Engineer',
    startMonth: 'Oct',
    startYear: 2021,
    endMonth: 'Dec',
    endYear: 2023,
    details: [
      {
        highlight: 'Architected fullstack solutions for Coinbase Pay',
        content:
          '(Onramp), supporting 100+ cryptocurrencies and 60+ fiat currencies',
      },
      {
        highlight: 'Expanded market reach to 500M+ global Apple Pay users',
        content:
          'by leading the end-to-end architecture and launch of Guest Checkout, enabling non-Coinbase users to onramp up to $500/week.',
      },
      // {
      //   highlight: 'Led Guest Checkout and Apple Pay integration',
      //   content:
      //     'from inception to launch, architecting solutions that enabled non-Coinbase users to onramp up to $500/week, expanding market reach to 500M+ Apple Pay users globally.',
      // },
      {
        highlight: 'Scaled payment volume to $100M+',
        content:
          'by achieving 30% QoQ growth, while establishing the integration ecosystem from the ground up with 80+ partners.',
      },
      // {
      //   highlight: 'Drove 30% QoQ volume growth',
      //   content:
      //     '($164M to $213M) through frontend optimizations that improved funnel conversion rates from 20.1% to 28.3%.',
      // },
      // {
      //   highlight: 'Drove payment volume to north of $100 million',
      //   content: ''
      // },
      // {
      //   highlight: 'Went from 0 to north of 80 integration partners',
      //   content: '(developers who have integrated CB Pay)'
      // },
      // {
      //   highlight: '0 - 200k monthly transacting users',
      //   content: ''
      // }
    ],
  },
  {
    company: 'Facebook',
    title: 'Senior Frontend Engineer',
    startMonth: 'May',
    startYear: 2019,
    endMonth: 'Oct',
    endYear: 2021,
    details: [
      {
        highlight:
          'Designed and built ServiceLab Capacity Mode Regressions UI and Workloads UI',
        content:
          'end-to-end, replacing manual Python config editing with intuitive interfaces that prevented million-dollar regressions at Facebook scale.',
      },
      {
        highlight: 'Architected custom Recoil-based form library',
        content:
          'and Python-to-JSON config parser; modernized codebase by removing 1,224 lines of legacy code while migrating to Relay, GraphQL, and XDS.',
      },
      {
        highlight: 'Led cross-functional user research',
        content:
          'across 4 offices, driving API design decisions and mentoring engineers on GraphQL/Relay, reducing implementation time by 50%.',
      },
    ],
  },
  {
    company: 'Bloomberg, LP',
    title: 'Senior Frontend Engineer',
    startMonth: 'Jun',
    startYear: 2018,
    endMonth: 'May',
    endYear: 2019,
    details: [],
    blurb: {
      highlight: 'KYC - Entity Intelligence.',
      content:
        'Lead frontend development for a research intelligence app using React, Redux, SSR, and Node. Part of an agile team releasing bi-weekly to production.',
    },
  },
  {
    company: 'Transfix',
    title: 'Frontend Engineer',
    startMonth: 'May',
    startYear: 2017,
    endMonth: 'Jun',
    endYear: 2018,
    details: [],
    blurb: {
      highlight: 'Leading the revolution of the shipping industry.',
      content:
        'Created a custom React app generator in Node which was used to create all internal applications as well as fast prototyping. Deployed production code daily. Testing with Cypress.',
    },
  },
  {
    company: 'L2, Inc',
    title: 'Frontend Developer',
    startMonth: 'Jun',
    startYear: 2016,
    endMonth: 'May',
    endYear: 2017,
    details: [],
    blurb: {
      highlight:
        'Measuring the immeasurable - gaining insights on the digital performance of brands.',
      content:
        'Used the Google Sheets API + Apps Script and transformed the way L2 performed manual data collection.',
    },
  },
  {
    company: 'Accenture',
    title: 'Frontend Developer',
    startMonth: 'Jul',
    startYear: 2015,
    endMonth: 'Jun',
    endYear: 2016,
    details: [],
  },
]

export function WorkHistory() {
  return (
    <main>
      <h2 className="pb-2 font-bold text-2xl">EXPERIENCE</h2>
      {workHistoryData.map(
        ({
          company,
          title,
          startMonth,
          startYear,
          endMonth,
          endYear,
          details,
          blurb,
        }) => {
          return (
            <ExperienceItem
              key={company}
              company={company}
              title={title}
              startMonth={startMonth}
              startYear={startYear}
              endMonth={endMonth}
              endYear={endYear}
              details={details}
              blurb={blurb}
            />
          )
        }
      )}
    </main>
  )
}
