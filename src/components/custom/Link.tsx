import type {ReactNode} from 'react'

import {cn} from '../../lib/utils'

export function Link({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={href} className={cn('hover:underline', className)} target="_blank">
      {children}
    </a>
  )
}
