export function Header() {
  return (
    <header className="relative pt-4 pr-4 pb-3">
      <div className="absolute -top-4 -left-4 font-bold text-7xl leading-14">
        <div>AARON</div>
        <div>CORDOVA</div>
      </div>
      <div className="ml-auto w-96 text-right">
        <p className="tracking-[4px]">SENIOR FRONTEND ENGINEER</p>
        <p className="text-xs">
          10+ years turning complex backends into intuitive frontends. Fullstack
          JavaScript engineer who's built AI tooling at Docker, payment
          platforms at Coinbase, and infrastructure UIs at Meta.
        </p>
        <p className="text-xs italic">Readability &gt; Complexity</p>
      </div>
    </header>
  )
}
