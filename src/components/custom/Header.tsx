export function Header() {
  return (
    <header className="relative pt-4 pr-4 pb-3">
      <div className="-top-4 -left-4 absolute font-bold text-7xl leading-14">
        <div>AARON</div>
        <div>CORDOVA</div>
      </div>
      <p className="text-right font-light tracking-[4px]">
        JAVASCRIPT ENGINEER
      </p>
      <div className="pr-1 text-right text-xs">
        <p>
          I'm Aaron! A fullstack JavaScript engineer obsessed with{' '}
          <span className="font-bold">UX</span> and peak{' '}
          <span className="font-bold">performance</span>.
        </p>
        <p>
          I've architected impactful interfaces and created UIs for complex LLM
          systems.
        </p>
        <p className="italic">Readability &gt; Complexity</p>
      </div>
    </header>
  )
}
