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

export type WorkHistoryItem = {
  company: string
  title: string
  startMonth: Month
  startYear: number
  endMonth?: Month
  endYear?: number
  details: {
    highlight?: ReactNode // Shown in bold
    content: ReactNode // Work history bullet point
  }[]
}
