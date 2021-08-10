import {cn} from 'helpers'

export default function TimeLineItem({children, isLast, isFirst}) {
  return (
    <div className="relative">
      <div className={cn('timeline-item', {last: isLast, first: isFirst})}>
        {children}
      </div>
    </div>
  )
}
