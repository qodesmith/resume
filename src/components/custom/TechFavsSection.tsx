import type {ReactNode} from 'react'

import dockerLogo from '../../images/docker.png'
import drizzleLogo from '../../images/drizzle-logo.webp'
import jotaiLogo from '../../images/jotai.png'
import shadcnAvatar from '../../images/shadcn.png'
import tanstackLogo from '../../images/tanstack-logo.png'
import {cn} from '../../lib/utils'
import {
  BetterAuthIcon,
  BiomeIcon,
  BunIcon,
  HonoIcon,
  ReactIcon,
  SQLiteIcon,
  TailwindIcon,
} from './icons'
import {MetadataSection} from './MetadataSection'

export function TechFavsSection() {
  return (
    <MetadataSection title="Tech Favs">
      <div className="flex flex-wrap">
        {/* LINE 1 */}
        <Icon icon={<ReactIcon />} text="React" />
        <Bullet />

        <Icon icon={<BunIcon />} text="Bun" />
        <Bullet />

        <Icon icon={<SQLiteIcon />} text="SQLite" />

        {/* LINE 2 */}
        <Image src={tanstackLogo} text="Tanstack Router" />
        <Bullet />

        <Image src={jotaiLogo} text="Jotai" />

        {/* LINE 3 */}
        <Icon icon={<BiomeIcon />} text="Biome" />
        <Bullet />

        <Image src={shadcnAvatar} text="Shadcn" imgCls="rounded-full" />
        <Bullet />

        <Image src={dockerLogo} text="Docker" imgCls="w-6" />

        {/* LINE 4 */}
        <Icon icon={<BetterAuthIcon />} text="Better Auth" />
        <Bullet />

        <Image src={drizzleLogo} text="Drizzle ORM" />

        {/* LINE 5 */}
        <Icon icon={<HonoIcon />} text="Hono" />
        <Bullet />

        <Icon icon={<TailwindIcon />} text="Tailwind CSS" />
      </div>
    </MetadataSection>
  )
}

function Bullet() {
  return <div className="px-1.5">&bull;</div>
}

function Icon({icon, text}: {icon: ReactNode; text: string}) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex h-4 w-4 items-center justify-center">{icon}</div>
      {text}
    </div>
  )
}

function Image({
  src,
  text,
  imgCls,
}: {
  src: string
  text: string
  imgCls?: string
}) {
  return (
    <div className="flex items-center gap-1">
      <img
        src={src}
        alt={text}
        className={cn('h-4 w-4 object-cover', imgCls)}
      />
      {text}
    </div>
  )
}
