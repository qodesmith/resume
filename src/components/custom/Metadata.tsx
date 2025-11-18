import {ContactSection} from './ContactSection'
import {OpenSourceSection} from './OpenSourceSection'
import {TechFavsSection} from './TechFavsSection'

export function Metadata() {
  return (
    <aside className="flex flex-col gap-5">
      <ContactSection />
      <TechFavsSection />
      <OpenSourceSection />
    </aside>
  )
}
