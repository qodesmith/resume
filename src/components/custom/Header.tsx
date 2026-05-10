export function Header() {
  // Since July 2015...
  const start = new Date(2015, 6, 1)
  const thisYear = new Date().getFullYear()
  const thisMonth = new Date().getMonth()
  let months = 0
  let complete = false

  while (!complete) {
    if (start.getFullYear() === thisYear && start.getMonth() === thisMonth) {
      complete = true
    } else {
      start.setMonth(start.getMonth() + 1)
      months++
    }
  }

  const years = Math.floor(months / 12)

  return (
    <header className="relative pr-4">
      <div className="absolute -top-5 -left-4 scale-y-90 font-bold text-7xl leading-14">
        <div>AARON</div>
        <div>CORDOVA</div>
      </div>
      <div className="ml-auto w-96 text-right">
        <p className="tracking-[4px]">SENIOR FRONTEND ENGINEER</p>
        <p className="text-xs">
          {years}+ years turning complex backends into intuitive frontends.
          TypeScript expert who's built AI tooling at Docker, payment platforms
          at Coinbase, and infrastructure UIs at Meta.
        </p>
      </div>
    </header>
  )
}
