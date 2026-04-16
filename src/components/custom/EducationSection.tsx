import {Link} from './Link'
import {MetadataSection} from './MetadataSection'

export function EducationSection() {
  return (
    <MetadataSection title="Education">
      <div className="flex flex-col gap-2">
        <EducationItem
          institution="General Assembly"
          description="Full stack coding bootcamp"
          url="https://generalassemb.ly/"
        />
        <EducationItem
          institution="Institute of Audio Research"
          description="Digital audio recording"
          url="https://en.wikipedia.org/wiki/Institute_of_Audio_Research"
        />
        <EducationItem
          institution="The Cittone Institute"
          description="Analog and digital circuitry"
        />
        {/* <EducationItem
          institution="The School of Hard Knocks 🎙️"
          description="Life wisdom from the pavement"
          url="https://www.youtube.com/watch?v=NI5rplnShGY&list=PLj2TkO0tSJ_n15HKKCJLELm0L7sOymz0a"
        /> */}
      </div>
    </MetadataSection>
  )
}

function EducationItem({
  institution,
  description,
  url,
}: {
  institution: string
  description: string
  url?: string
}) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-sm">
        {url ? <Link href={url}>{institution}</Link> : institution}
      </h3>
      <div className="text-xs italic">{description}</div>
    </div>
  )
}
