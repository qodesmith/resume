import type {WorkHistoryItem} from '../../types'

import {cn} from '@/lib/utils'

export function ExperienceItem({
  company,
  title,
  startMonth,
  startYear,
  endMonth,
  endYear,
  details,
  blurb,
  hideTitleUnderline,
}: WorkHistoryItem) {
  return (
    <article className="pb-3 text-xs last:pb-0">
      <div
        className={cn(
          'flex justify-between text-sm',
          !hideTitleUnderline && 'border-b border-dotted'
        )}
      >
        <div className="flex items-baseline gap-2">
          <span className="font-bold uppercase">{company}</span>
          <div className="text-xs italic">
            {startMonth} {startYear} -{' '}
            {endMonth && endYear ? `${endMonth} ${endYear}` : 'present'}
          </div>
        </div>
        <span>{title}</span>
      </div>

      <div className="pt-0.5">
        {details.length > 0 && (
          <ul>
            {details.map(({highlight, content}, i) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: it's ok
                <li key={i} className="pb-1 last:pb-0">
                  {highlight ? (
                    <>
                      <span className="font-bold italic">{highlight}</span>{' '}
                      {content}
                    </>
                  ) : (
                    content
                  )}
                </li>
              )
            })}
          </ul>
        )}
        {details.length === 0 && blurb && (
          <>
            <span className="italic">{blurb.highlight}</span> {blurb.content}
          </>
        )}
      </div>
    </article>
  )
}
