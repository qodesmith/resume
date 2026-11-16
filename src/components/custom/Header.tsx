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
    <header className="relative pt-4 pr-4">
      <div className="absolute -top-4 -left-4 font-bold text-7xl leading-14">
        <div>AARON</div>
        <div>CORDOVA</div>
      </div>
      <div className="ml-auto w-96 text-right">
        <p className="tracking-[4px]">STAFF FRONTEND ENGINEER</p>
        <p className="text-xs">
          I build the platform, the team, and the revenue. {years}+ years
          shipping AI-native frontends at Terzo, AI tooling at Docker, payments
          at Coinbase, and infrastructure UIs at Meta.
        </p>
      </div>
    </header>
  )
}
