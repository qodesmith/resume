import {Link} from './Link'
import {MetadataSection} from './MetadataSection'

export function OpenSourceSection() {
  return (
    <MetadataSection title="Open Source">
      <OpenSourceItem
        title="AI Workflow"
        description="8-phase agentic dev workflow - BDD specs, codebase audits, Ralph Loop execution, drift detection. Bun + TypeScript."
        url="https://github.com/qodesmith/ai-workflow"
        linkText="github.com/qodesmith/ai-workflow"
      />
      <OpenSourceItem
        title="Unraid Cron Jobs"
        description="Production cron jobs in Docker on Unraid - GitHub backup, YouTube downloads, and more."
        url="https://github.com/qodesmith/unraid-cron-jobs"
        linkText="github.com/qodesmith/unraid-cron-jobs"
      />
      <OpenSourceItem
        title="Beats Playlist"
        description="Spotify, but only Hip-Hop instrumentals. Built on the Web Audio API."
        url="https://beats.aaroncordova.dev"
        linkText="beats.aaroncordova.dev"
      />
      <OpenSourceItem
        title="Create New App"
        description="Bun CLI that scaffolds fullstack React apps with end-to-end type-safe Hono RPC, structured SQLite-backed error telemetry, and turnkey Better Auth + Drizzle + Fly.io/LiteFS deployment."
        url="https://github.com/qodesmith/create-new-app"
        linkText="https://github.com/qodesmith/create-new-app"
      />
    </MetadataSection>
  )
}

function OpenSourceItem({
  title,
  description,
  url,
  linkText,
}: {
  title: string
  description: string
  url: string
  linkText?: string
}) {
  return (
    <div className="flex flex-col text-sm">
      <h3 className="font-bold">{title}</h3>
      <div className="text-xs italic">{description}</div>
      <Link href={url} className="text-xs">
        {linkText ?? url}
      </Link>
    </div>
  )
}
