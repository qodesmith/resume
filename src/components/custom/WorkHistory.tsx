import type {WorkHistoryItem} from '../../types'

import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip'
import {ExperienceItem} from './ExperienceItem'

function WorkItemTootip({text, tooltip}: {text: string; tooltip: string}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="resume-tooltip border-b border-b-current border-dotted">
          {text}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <span>{tooltip}</span>
      </TooltipContent>
    </Tooltip>
  )
}

const workHistoryData: WorkHistoryItem[] = [
  {
    company: 'Terzo',
    title: 'Staff Frontend Engineer',
    startMonth: 'Jun',
    startYear: 2026,
    details: [
      {
        highlight: 'Turned the frontend into a revenue driver.',
        content:
          "Led Nova, Terzo's AI savings platform, which won a multi-year enterprise deal: ~$1M in one quarter, 75%+ of Q4 bookings.",
      },
      {
        highlight: "Rebuilt Terzo's frontend from zero as first US hire.",
        content:
          'Replaced legacy Angular with TanStack Start, React 19 and Bun; live in 37 days and now the company standard.',
      },
      {
        highlight: 'Cut feature delivery from 6 months to 3 weeks.',
        content:
          'Enabled 3 full redesigns of the flagship product in 3 months, including a rewrite shipped in 7 days.',
      },
      {
        highlight: "Architected Mystique, Terzo's design system.",
        content: (
          <>
            Custom typography and layout primitives,{' '}
            <WorkItemTootip
              text="WCAG"
              tooltip="Web Content Accessibility Guidelines"
            />{' '}
            2.1 AA tokens, a live token editor that outputs production CSS, and
            an AI skill that teaches agents to build on-system UI.
          </>
        ),
      },
      {
        highlight: 'Built an AI-native frontend team.',
        content:
          'Led 6 engineers across US and India; hired 3 before my start date. Introduced agentic Claude workflows and founded Jarvis to ship skills and AI code review to every repo.',
      },
    ],
  },
  {
    company: 'Docker',
    title: 'Senior Frontend Engineer',
    startMonth: 'Dec',
    startYear: 2023,
    endMonth: 'Jun',
    endYear: 2026,
    details: [
      {
        highlight: "Architected Docker's agent-first design system:",
        content: (
          <>
            129 components,{' '}
            <WorkItemTootip
              text="DTCG"
              tooltip="Design Tokens Community Group"
            />{' '}
            tokens,{' '}
            <WorkItemTootip
              text="WCAG"
              tooltip="Web Content Accessibility Guidelines"
            />{' '}
            AA/AAA. Adopted by Claude Code, Claude Desktop, Codex CLI and
            internal agents.
          </>
        ),
      },
      {
        highlight: 'Sole frontend engineer on Docker Model Runner,',
        content: (
          <>
            Docker's local LLM platform. Rebuilt the multimodal chat UI and{' '}
            <WorkItemTootip text="SSE" tooltip="Server Sent Events" /> + RxJS
            download streaming, driving a{' '}
            <span className="italic">44% increase</span> in downloads (90k →
            130k).
          </>
        ),
      },
      {
        highlight: 'Shipped the MCP Catalog in Docker Desktop,',
        content:
          "plus Docker Offload's local/cloud GPU switching and a cross-team Electron deep-link system.",
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
        highlight: 'Owned fullstack delivery of Coinbase Pay (Onramp),',
        content:
          'a Next.js app supporting 100+ cryptocurrencies and 60+ fiat currencies.',
      },
      {
        highlight: 'Expanded market reach to 500M+ global Apple Pay users',
        content:
          'by architecting and launching Guest Checkout end-to-end, letting non-Coinbase users onramp up to $500/week.',
      },
      {
        highlight: 'Scaled payment volume to $100M+',
        content:
          'at 30% QoQ growth, building the integration ecosystem from 0 to 80+ partners.',
      },
      {
        highlight: 'Drove funnel conversion 20.1% → 28.3%,',
        content:
          'driving volume from $164M to $213M and scaling monthly transacting users from 0 to 200k.',
      },
      // {
      //   highlight: 'Drove 30% QoQ volume growth',
      //   content:
      //     '($164M to $213M) through frontend optimizations that improved funnel conversion rates from 20.1% to 28.3%.',
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
    company: 'Meta',
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
          'end-to-end, replacing manual Python config edits with UIs that prevented million-dollar regressions at Meta scale.',
      },
      {
        highlight: 'Engineered a custom Recoil-based form library',
        content: (
          <>
            and Python-to-JSON config parser. Removed 1,224 lines of legacy code
            while migrating to Relay, GraphQL, and{' '}
            <WorkItemTootip
              text="XDS"
              tooltip="Internal design system at Meta"
            />
            .
          </>
        ),
      },
      {
        highlight: 'Led cross-functional user research across 4 offices,',
        content:
          'driving API design decisions and mentoring engineers on GraphQL/Relay - cutting implementation time by 50%.',
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
      highlight: 'KYC - Anti Money Laundering.',
      content: (
        <>
          One of 3 frontend engineers building a research intelligence app that
          vetted entities through sanctions, beneficial ownership, and negative
          news sentiment - using React, Redux,{' '}
          <WorkItemTootip text="SSR" tooltip="Server Side Rendering" />, and
          Node.
        </>
      ),
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
    // blurb: {
    //   content:
    //     'Built a React app generator in Node used across all internal apps, set frontend standards, and mentored junior engineers - React, Redux, Cypress.',
    // },
    hideTitleUnderline: true,
  },
  {
    company: 'L2, Inc',
    title: 'Frontend Developer',
    startMonth: 'Jun',
    startYear: 2016,
    endMonth: 'May',
    endYear: 2017,
    details: [],
    // blurb: {
    //   content:
    //     'Built internal research tools in React + Redux on a Node/Express backend. Replaced company-wide Excel workflows with a Google Sheets API + Apps Script automation.',
    // },
    hideTitleUnderline: true,
  },
  {
    company: 'Accenture',
    title: 'Frontend Developer',
    startMonth: 'Jul',
    startYear: 2015,
    endMonth: 'Jun',
    endYear: 2016,
    details: [],
    // blurb: {
    //   content:
    //     // 'Delivered a living style guide to clients; created cross-browser custom email templates.',
    //     'Built and maintained responsive applications serving millions of customers daily, working across local and global teams.',
    // },
    hideTitleUnderline: true,
  },
]

export function WorkHistory() {
  return (
    <main>
      <h2 className="pb-2 font-bold text-2xl">EXPERIENCE</h2>
      {workHistoryData.map(({company, ...workHistoryItem}) => {
        return (
          <ExperienceItem
            key={company}
            {...workHistoryItem}
            company={company}
          />
        )
      })}
    </main>
  )
}
