import type {ReactNode} from 'react'

import {MetadataSection} from './MetadataSection'

export function SkillsSection() {
  return (
    <MetadataSection title="Skills">
      <SkillItem title="Languages">
        JavaScript, TypeScript, Python, HTML, CSS
      </SkillItem>
      <SkillItem title="Frameworks">
        React, Node.js, GraphQL, Relay, Redux, Hono, Tailwind
      </SkillItem>
      <SkillItem title="Tools">
        Claude Code CLI, Docker, Git, Bun, Shadcn
      </SkillItem>
      <SkillItem title="Data">SQLite, MongoDB, REST APIs</SkillItem>
      <SkillItem title="Testing">
        Jest, Cypress, Bun, React Testing Library
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
