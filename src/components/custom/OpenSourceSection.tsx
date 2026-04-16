import {Link} from './Link'
import {MetadataSection} from './MetadataSection'

export function OpenSourceSection() {
  return (
    <MetadataSection title="Open Source">
      <OpenSourceItem
        title="Create New App"
        description="Custom fullstack React app generator"
        url="https://github.com/qodesmith/create-new-app"
        linkText="github.com/qodesmith/create-new-app"
      />
      <OpenSourceItem
        title="Beats Playlist"
        description="Spotify, but full of Hip-Hop instrumentals"
        url="https://beats.aaroncordova.dev"
        linkText="beats.aaroncordova.dev"
      />
      <OpenSourceItem
        title="Baseboard Configurator"
        description="Optimize baseboard cuts, minimize waste"
        url="https://github.com/qodesmith/baseboard-configurator"
        linkText="github.com/qodesmith/baseboard-configurator"
      />
      <OpenSourceItem
        title="Typer.js"
        description="Datepicker in vanilla JS"
        url="https://github.com/qodesmith/typer"
        linkText="github.com/qodesmith/typer"
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
