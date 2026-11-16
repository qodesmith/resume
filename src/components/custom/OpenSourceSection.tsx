import {Link} from './Link'
import {MetadataSection} from './MetadataSection'

export function OpenSourceSection() {
  return (
    <MetadataSection title="Open Source">
      <OpenSourceItem
        title="Unimatrix Zero"
        description="Branching AI chat on a canvas: fork any reply into parallel Claude and ChatGPT threads, no API keys. Electron, Agent SDK, Codex, React Flow."
        url="https://github.com/qodesmith/unimatrix-zero"
        linkText="github.com/qodesmith/unimatrix-zero"
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
