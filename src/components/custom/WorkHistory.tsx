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
    company: 'Docker',
    title: 'Senior Frontend Engineer',
    startMonth: 'Dec',
    startYear: 2023,
    details: [
      {
        highlight: "Architected Docker's design system",
        content: (
          <>
            on an accessibility-first, agent-first foundation - Tailwind +
            custom Shadcn registry, 129 components,{' '}
            <WorkItemTootip
              text="DTCG"
              tooltip="Design Tokens Community Group"
            />{' '}
            tokens, 3 theme modes,{' '}
            <WorkItemTootip
              text="WCAG"
              tooltip="Web Content Accessibility Guidelines"
            />{' '}
            AA/AAA contrast. Consumed today by Claude Code, Claude Desktop,
            Codex CLI, Opencode, and Docker's internal coding agents.
          </>
        ),
      },
      {
        highlight: 'Sole frontend engineer on Docker Model Runner,',
        content: (
          <>
            Docker's local LLM inference platform. Redesigned and rebuilt the
            chat UI, including support for multimodal LLM responses.{' '}
            <WorkItemTootip text="SSE" tooltip="Server Sent Events" /> + RxJS
            streaming for model downloads - progress, failures, and concurrency
            without UI thrashing. Drove{' '}
            <span className="italic">44% increase</span> in downloads (90k →
            130k).
          </>
        ),
      },
      {
        highlight: 'Shipped the MCP Catalog UI in Docker Desktop,',
        content:
          'an in-app directory to discover and install MCP servers. Parsed Go-generated markdown and contributed upstream Go fixes.',
      },
      {
        highlight: 'Delivered cloud-native features for Docker Offload,',
        content:
          'including seamless local/cloud context switching and GPU resource management.',
      },
      {
        highlight: 'Designed a reusable deep-link system across Electron',
        content:
          '(React renderer + Node main process), adoptable by any team. First shipped by Docker Offload to surface announcement dialogs from web marketing pages.',
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
    blurb: {
      content:
        'Built a React app generator in Node used across all internal apps, set frontend standards, and mentored junior engineers - React, Redux, Cypress.',
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
      content:
        'Built internal research tools in React + Redux on a Node/Express backend. Replaced company-wide Excel workflows with a Google Sheets API + Apps Script automation.',
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
