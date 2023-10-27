import Header from './Header'
import InfoCards from './InfoCards'
import WorkHistory from './WorkHistory'

export default function Resume() {
  return (
    <div className="letter-paper-size page overflow-h mha mv64 df flex-col">
      <Header />
      <div className="df align-items-start">
        <WorkHistory />
        <div className="divider" />
        <InfoCards />
      </div>
    </div>
  )
}
