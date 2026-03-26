import {ContactSection} from './ContactSection'
import {EducationSection} from './EducationSection'
import {OpenSourceSection} from './OpenSourceSection'
import {TechFavsSection} from './TechFavsSection'

export function Metadata() {
  return (
    <aside className="flex flex-col gap-5">
      <ContactSection />
      <TechFavsSection />
      <OpenSourceSection />
      <EducationSection />
    </aside>
  )
}
