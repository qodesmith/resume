export function Header() {
  return (
    <header className="relative pt-4 pr-4">
      <div className="-top-4 -left-4 absolute font-bold text-7xl leading-14">
        <div>AARON</div>
        <div>CORDOVA</div>
      </div>
      <p className="text-right font-light tracking-[4px]">
        JAVASCRIPT ENGINEER
      </p>
      <div className="pr-1 text-right text-xs">
        <p>
          I'm Aaron! A fullstack JavaScript engineer obsessed with UX and peak{' '}
          <span className="font-bold">performance</span>.
        </p>
        <p>
          At companies like <span className="font-bold">Meta</span>,{' '}
          <span className="font-bold">Coinbase</span>,{' '}
          <span className="font-bold">Docker</span>, and{' '}
          <span className="font-bold">Bloomberg</span>, I've architected
          impactful
        </p>
        <p>
          interfaces, scaling funnels by 30%, and creating UIs for complex LLM
          systems.
        </p>
        <p className="italic">Readability &gt; Complexity</p>
      </div>
    </header>
  )
}
