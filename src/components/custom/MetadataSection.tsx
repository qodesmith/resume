import type {ReactNode} from 'react'

import {cn} from '@/lib/utils'

export function MetadataSection({
  title,
  children,
  tight,
  first,
}: {
  title: string
  children: ReactNode
  tight?: boolean
  first?: boolean
}) {
  return (
    <section>
      <h2
        className={cn('font-bold text-2xl uppercase', {
          // The top padding is to make up for the space saved from the leading.
          'leading-7': true,
          'pt-0.5': first,
        })}
      >
        {title}
      </h2>
      <div className={cn('flex flex-col', !tight && 'gap-1')}>{children}</div>
    </section>
  )
}
