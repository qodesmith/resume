import {Separator} from '../ui/separator'
import {Header} from './Header'
import {WorkHistory} from './WorkHistory'

export function Resume() {
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: it's ok
    <div
      id="resume"
      className="mx-auto my-16 flex h-[11in] w-[8.5in] flex-col gap-1 overflow-hidden border font-opensans text-neutral-600"
    >
      <Header />

      <section className="grid h-full grid-cols-[65%_auto_1fr] gap-2 px-4 pb-4">
        <WorkHistory />
        <Separator orientation="vertical" />
        <aside>Aside</aside>
      </section>
    </div>
  )
}
