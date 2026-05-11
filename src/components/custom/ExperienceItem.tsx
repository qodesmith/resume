import type {WorkHistoryItem} from '../../types'

export function ExperienceItem({
  company,
  title,
  startMonth,
  startYear,
  endMonth,
  endYear,
  details,
  blurb,
}: WorkHistoryItem) {
  return (
    <article className="pb-3 text-xs last:pb-0">
      <div className="flex justify-between border-b border-dotted text-sm">
        <div className="flex items-baseline gap-2">
          <span className="font-bold uppercase">{company}</span>
          <div className="text-xs italic">
            {startMonth} {startYear} -{' '}
            {endMonth && endYear ? `${endMonth} ${endYear}` : 'present'}
          </div>
        </div>
        <span>{title}</span>
      </div>

      <div className="pt-1">
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
