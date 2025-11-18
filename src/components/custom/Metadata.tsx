import {ContactSection} from './ContactSection'
import {TechFavsSection} from './TechFavsSection'

export function Metadata() {
  return (
    <aside className="flex flex-col gap-5">
      <ContactSection />
      <TechFavsSection />
    </aside>
  )
}
