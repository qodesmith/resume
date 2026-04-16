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
      <h2 className="py-1 font-bold text-2xl uppercase first:pt-0">{title}</h2>
      <div className="flex flex-col gap-1.5">{children}</div>
    </section>
  )
}
