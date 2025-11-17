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
    highlight?: string // Shown in bold
    content: string // Work history bullet point
  }[]
}
