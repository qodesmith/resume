import type {ReactNode} from 'react'

export function MetadataSection({
  title,
  children,
  tight,
}: {
  title: string
  children: ReactNode
  tight?: boolean
}) {
  return (
    <section>
      <h2 className="font-bold text-2xl uppercase leading-7">{title}</h2>
      <div className={`flex flex-col ${tight ? '' : 'gap-1'}`}>{children}</div>
    </section>
  )
}
