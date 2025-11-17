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
]

export function WorkHistory() {
  return (
    <main>
      <h2 className="py-2 font-bold text-2xl">EXPERIENCE</h2>
      {workHistoryData.map(
        ({
          company,
          title,
          startMonth,
          startYear,
          endMonth,
          endYear,
          details,
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
            />
          )
        }
      )}
    </main>
  )
}
