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
        highlight: 'Led frontend architecture as sole frontend engineer',
        content:
          'for Docker Model Runner (DMR), transforming a CLI-dependent tool into a production-ready UI that drove 44% increase in model downloads (90k to 130k) within one month.',
      },
      {
        highlight: 'Consumed real-time streaming',
        content:
          'for AI model downloads, integrating SSE with RxJS throttling (250ms) to handle high-frequency events without UI thrashing, enabling progress visualization for multi-GB LLM downloads.',
      },
      {
        highlight: 'Built cloud-native integration features',
        content:
          'for Docker Offload, implementing seamless context switching between local and cloud environments, GPU resource management, and deep-linking architecture for direct navigation from marketing pages.',
      },
      {
        highlight: 'Developed reusable product announcement system',
        content:
          "using persistent Redux state management, creating a generic framework adopted by multiple teams across Docker Desktop's Electron/React/Node.js stack.",
      },
      {
        highlight: 'Optimized performance and developer experience',
        content:
          'by migrating custom table implementations to Data Grid Pro, reducing codebase complexity by ~40% while standardizing UX patterns across model management and MCP server interfaces.',
      },
      {
        highlight: 'Collaborated cross-functionally',
        content:
          'with platform, backend (Go), and AI runtime teams to diagnose and resolve critical framework bugs, including identifying and fixing an edge-case proxy behavior issue in the testing framework that had blocked the platform team.',
      },
      {
        highlight: 'Gained deep AI/ML domain expertise',
        content:
          "working with LLM infrastructure including vector databases, embeddings, GGUF model formats, OCI artifacts, and OpenAI-compatible APIs through Docker's Model Context Protocol (MCP) implementation.",
      },
    ],
  },
]

export function WorkHistory() {
  return (
    <main>
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
