import Header from './Header'
import InfoCards from './InfoCards'
import WorkHistory from './WorkHistory'

export default function Resume() {
  return (
    <div className="letter-paper-size page overflow-h mha mv64 relative df align-items-end">
      <Header />
      <div className="df align-items-center pb8 relative">
        <WorkHistory />
        <div className="divider" />
        <InfoCards />
      </div>
    </div>
  )
}
