import {Separator} from '../ui/separator'
import {Header} from './Header'
import {Metadata} from './Metadata'
import {WorkHistory} from './WorkHistory'

export function Resume() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="mx-auto">
      <div className="flex justify-center p-6">
        <button
          type="button"
          onClick={handlePrint}
          className="cursor-pointer rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 print:hidden"
        >
          Print to PDF
        </button>
      </div>

      <div
        id="resume"
        className="mx-auto flex h-[11in] w-[8.5in] flex-col gap-1 overflow-hidden font-opensans text-neutral-600"
      >
        <Header />

        <section className="grid h-full grid-cols-[63%_auto_1fr] gap-2 px-4 pb-4">
          <WorkHistory />
          <Separator orientation="vertical" />
          <Metadata />
        </section>
      </div>
    </div>
  )
}
