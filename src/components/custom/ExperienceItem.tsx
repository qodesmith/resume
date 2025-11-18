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
      <div className="flex justify-between text-sm">
        <span className="font-bold uppercase">{company}</span>
        <span>{title}</span>
      </div>
      <div>
        {startMonth} {startYear} -{' '}
        {endMonth && endYear ? `${endMonth} ${endYear}` : 'present'}
      </div>
      {details.length > 0 && (
        <ul>
          {details.map(({highlight, content}, i) => {
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: it's ok
              <li key={i} className="pb-1.5 last:pb-0">
                {highlight ? (
                  <>
                    <span className="italic">{highlight}</span> {content}
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
    </article>
  )
}
