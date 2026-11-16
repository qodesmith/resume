import type {ReactNode} from 'react'

import {MetadataSection} from './MetadataSection'

export function SkillsSection() {
  return (
    <MetadataSection title="Skills">
      <SkillItem title="AI">
        Claude Agent SDK, Anthropic API, MCP, multi-agent code review, agent
        skills, prompt-injection defense, LLM streaming (SSE)
      </SkillItem>
      <SkillItem title="Frontend">
        TypeScript, React 19, TanStack Start/Query, Next.js, Electron, Tailwind,
        Shadcn, Jotai, Relay
      </SkillItem>
      <SkillItem title="Design Systems">
        Design tokens (DTCG), WCAG 2.1 AA, theming, agent-ready component APIs
      </SkillItem>
      <SkillItem title="Backend">
        Bun, Node.js, Hono · GraphQL, REST APIs · SQLite, Drizzle, MongoDB,
        Postgres
      </SkillItem>
      <SkillItem title="Testing">
        Vitest, Playwright, React Testing Library, Cypress
      </SkillItem>
      <SkillItem title="Tooling">
        Oxlint, Oxfmt, Docker, Claude Code, Codex
      </SkillItem>
    </MetadataSection>
  )
}

function SkillItem({title, children}: {title: string; children: ReactNode}) {
  return (
    <div className="flex flex-col text-sm">
      <h3 className="font-bold">{title}</h3>
      <p className="text-xs">{children}</p>
    </div>
  )
}
