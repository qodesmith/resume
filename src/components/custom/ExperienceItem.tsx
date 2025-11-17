import type {WorkHistoryItem} from '../../types'

export function ExperienceItem({
  company,
  title,
  startMonth,
  startYear,
  endMonth,
  endYear,
  details,
}: WorkHistoryItem) {
  return (
    <article className="pb-3 text-xs last:pb-0">
      <div className="flex justify-between text-sm">
        <span className="font-bold uppercase">{company}</span>
        <span>{title}</span>
      </div>
      <div className="italic">
        {startMonth} {startYear} -{' '}
        {endMonth && endYear ? `${endMonth} ${endYear}` : 'present'}
      </div>
      <ul>
        {details.map(({highlight, content}, i) => {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: it's ok
            <li key={i} className="pb-1.5 last:pb-0">
              {highlight ? (
                <>
                  <span className="font-bold">{highlight}</span> {content}
                </>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ul>
    </article>
  )
}
