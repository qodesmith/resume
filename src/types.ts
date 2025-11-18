import type {ReactNode} from 'react'

type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'

type Content = {
  highlight?: ReactNode
  content: ReactNode
}

export type WorkHistoryItem = {
  company: string
  title: string
  startMonth: Month
  startYear: number
  endMonth?: Month
  endYear?: number
  details: Content[]
  blurb?: Content
}
