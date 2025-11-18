import {Separator} from '../ui/separator'
import {Header} from './Header'
import {Metadata} from './Metadata'
import {WorkHistory} from './WorkHistory'

export function Resume() {
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: it's ok
    <div
      id="resume"
      className="mx-auto my-16 flex h-[11in] w-[8.5in] flex-col gap-1 overflow-hidden font-opensans text-neutral-600"
    >
      <Header />

      <section className="grid h-full grid-cols-[63%_auto_1fr] gap-2 p-4">
        <WorkHistory />
        <Separator orientation="vertical" />
        <Metadata />
      </section>
    </div>
  )
}
