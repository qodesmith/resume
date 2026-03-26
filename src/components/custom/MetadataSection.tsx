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
      <h2 className="pt-1 pb-2 font-bold text-2xl uppercase first:pt-0">
        {title}
      </h2>
      {children}
    </section>
  )
}
