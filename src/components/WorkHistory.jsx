import InfoCard from './InfoCard'
import Skillz from './Skillz'
import TimeLineItem from './TimeLineItem'
import WorkHistoryItem from './WorkHistoryItem'

export default function WorkHistory() {
  return (
    <section className="work-history">
      <TimeLineItem isFirst>
        <InfoCard title="Introduction">
          Hi, I'm Aaron and I'm all-things JavaScript! I solve problems with
          code &amp; deploy to production daily. I maintain a few OSS libraries
          and occasionally give tech talks. Functional programming for the win!{' '}
          <span className="i">Readability &gt; Complexity</span>
        </InfoCard>
      </TimeLineItem>
      <TimeLineItem>
        <InfoCard title="Top Skills">
          <Skillz />
        </InfoCard>
      </TimeLineItem>

      <TimeLineItem isLast>
        <h1 className="ma0 pl16 pt16 ttu">Experience</h1>
        <WorkHistoryItem
          company="Coinbase"
          role="Senior Front End Engineer"
          date="Oct 2021 - present">
          <span className="i">
            Harnessing the power of JavaScript to build a more open financial
            system.
          </span>{' '}
          Fullstack React playing in the crypto ecosystem.
        </WorkHistoryItem>
        <WorkHistoryItem
          company="Facebook"
          role="Senior Front End Engineer"
          date="May 2019 - Oct 2021">
          <span className="i">Make capacity easy to work with at scale.</span> I
          design and build UI's for service owners to easily (&amp; happily)
          manage their backend service. Heavy work with custom forms, APIs, and
          data transformation.
        </WorkHistoryItem>
        <WorkHistoryItem
          company="Bloomberg, LP"
          role="Senior Front End Engineer"
          date="June 2018 - May 2019">
          <span className="i">KYC - Entity Intelligence.</span> Using React,
          SSR, and Node to maintain applications related to fnancial data
          management. Part of an agile team releasing bi-weekly to production.
        </WorkHistoryItem>
        <WorkHistoryItem
          company="Transfix"
          role="Front End Engineer"
          date="May 2017 - June 2018">
          <span className="i">
            Leading the revolution of the shipping industry.
          </span>{' '}
          I created a custom React app generator in Node which was used to
          create all internal applications as well as fast prototyping. Deployed
          production code daily. Testing with Cypress.
        </WorkHistoryItem>
        <WorkHistoryItem
          company="L2, Inc"
          role="Front End Developer"
          date="June 2016 - May 2017">
          <span className="i">
            Measuring the immeasurable — gaining insights on the digital
            performance of brands.
          </span>{' '}
          So much data! Used the Google Sheets API + Apps Script and transformed
          the way L2 performed manual data collection.
        </WorkHistoryItem>
        <WorkHistoryItem
          company="Accenture"
          role="Front End Developer"
          date="July 2015 - June 2016">
          <span className="i">
            Guiding the world's top companies to do what they do best.
          </span>{' '}
          Wrote code viewed by millions for one of Florida's leading electric
          companies. Daily stand-up's with distributed teams across the nation
          and globe.
        </WorkHistoryItem>
      </TimeLineItem>
    </section>
  )
}
