import type {ReactNode} from 'react'

import {Mail, MapPin, Phone} from 'lucide-react'

import {GithubIcon, LinkedInIcon} from './icons'
import {Link} from './Link'
import {MetadataSection} from './MetadataSection'

export function ContactSection() {
  return (
    <MetadataSection title="Contact">
      <div className="flex flex-col gap-1.5">
        <ContactRow
          icon={
            <div className="h-5 w-5">
              <GithubIcon />
            </div>
          }
        >
          <Link href="https://github.com/qodesmith">github.com/qodesmith</Link>
        </ContactRow>
        <ContactRow icon={<Mail size={20} />}>
          <Link href="mailto:theqodesmith@gmail.com">
            theqodesmith@gmail.com
          </Link>
        </ContactRow>
        <ContactRow
          icon={
            <div className="h-5 w-5">
              <LinkedInIcon />
            </div>
          }
        >
          <Link href="https://www.linkedin.com/in/cordovaaaron/">
            linkedin.com/in/cordovaaaron
          </Link>
        </ContactRow>

        <ContactRow icon={<Phone size={20} />}>917.524.7817</ContactRow>
        <ContactRow icon={<MapPin size={20} />}>NJ</ContactRow>
      </div>
    </MetadataSection>
  )
}

function ContactRow({icon, children}: {icon: ReactNode; children: ReactNode}) {
  return (
    <div className="flex items-center gap-4 text-sm">
      {icon}
      <div className="grow">{children}</div>
    </div>
  )
}
