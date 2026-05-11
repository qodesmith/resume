import type {ReactNode} from 'react'

import {MetadataSection} from './MetadataSection'

export function SkillsSection() {
  return (
    <MetadataSection title="Skills">
      <SkillItem title="AI">
        MCP (Model Context Protocol), agentic UIs, Anthropic API, Claude SDK,
        LLM streaming (SSE, RxJS), Claude Code CLI
      </SkillItem>
      <SkillItem title="Frontend">
        TypeScript, React, Tailwind, Jotai, Redux, Relay, Shadcn, HTML, CSS
      </SkillItem>
      <SkillItem title="Backend">
        Node.js, Bun, Hono · GraphQL, REST APIs · SQLite, MongoDB, Postgres
      </SkillItem>
      <SkillItem title="Testing">
        Jest, Cypress, React Testing Library
      </SkillItem>
      <SkillItem title="Tooling">Docker, Git, Biome</SkillItem>
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
