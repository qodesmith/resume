import {ContactSection} from './ContactSection'
import {EducationSection} from './EducationSection'
import {OpenSourceSection} from './OpenSourceSection'
import {SkillsSection} from './SkillsSection'

export function Metadata() {
  return (
    <aside className="flex flex-col gap-5">
      <ContactSection />
      <SkillsSection />
      <OpenSourceSection />
      <EducationSection />
    </aside>
  )
}
