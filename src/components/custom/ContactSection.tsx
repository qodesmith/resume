import type {ReactNode} from 'react'

import {Mail, MapPin, Phone} from 'lucide-react'

import {GithubIcon, LinkedInIcon} from './icons'
import {Link} from './Link'
import {MetadataSection} from './MetadataSection'

export function ContactSection() {
  return (
    <MetadataSection title="Contact" tight first>
      <ContactRow
        icon={
          <div className="h-3 w-3">
            <GithubIcon />
          </div>
        }
      >
        <Link href="https://github.com/qodesmith">github.com/qodesmith</Link>
      </ContactRow>
      <ContactRow icon={<Mail size={12} />}>
        <Link href="mailto:theqodesmith@gmail.com">theqodesmith@gmail.com</Link>
      </ContactRow>
      <ContactRow
        icon={
          <div className="h-3 w-3">
            <LinkedInIcon />
          </div>
        }
      >
        <Link href="https://www.linkedin.com/in/cordovaaaron/">
          linkedin.com/in/cordovaaaron
        </Link>
      </ContactRow>

      <ContactRow icon={<Phone size={12} />}>917-524-7817</ContactRow>
      <ContactRow icon={<MapPin size={12} />}>NJ</ContactRow>
    </MetadataSection>
  )
}

function ContactRow({icon, children}: {icon: ReactNode; children: ReactNode}) {
  return (
    <div className="flex items-center gap-4 text-xs">
      {icon}
      <div className="grow">{children}</div>
    </div>
  )
}
