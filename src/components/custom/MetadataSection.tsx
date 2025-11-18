import type {ReactNode} from 'react'

export function MetadataSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="py-2 font-bold text-2xl uppercase">{title}</h2>
      {children}
    </section>
  )
}
