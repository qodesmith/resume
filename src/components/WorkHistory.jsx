import InfoCard from './InfoCard'
import WorkHistoryItem from './WorkHistoryItem'

export default function WorkHistory() {
  return (
    <section className="work-history">
      {/* INTRODUCTION */}
      <InfoCard title="Introduction">
        <div className="f-0-9em">
          Hi, I'm Aaron and I'm all-things JavaScript! I have an obsession for
          customer delight, pixels perfection, &amp; can't stop exploring and{' '}
          <a
            href="https://beats.aaroncordova.dev"
            className="royalblue"
            target="_blank">
            building
          </a>{' '}
          things. I've occassionally{' '}
          <a
            href="https://youtu.be/7FRHuVNVCj4?t=661"
            className="royalblue"
            target="_blank">
            given
          </a>{' '}
          <a
            href="https://www.youtube.com/watch?v=qDnOuV57TkY"
            className="royalblue"
            target="_blank">
            tech
          </a>{' '}
          <a
            href="https://www.youtube.com/watch?v=Cjt3q5hr-tw"
            className="royalblue"
            target="_blank">
            talks
          </a>{' '}
          😎
          <div className="mt4">
            Functional programming for the win.{' '}
            <span className="i">Readability &gt; Complexity</span>
          </div>
        </div>
      </InfoCard>

      {/* EXPERIENCE */}
      <h1 className="ma0 pl16 pt16 ttu">Experience</h1>

      {/* DOCKER */}
      <WorkHistoryItem
        company="Docker"
        role="Senior Front End Engineer"
        date="Dec 2023 - present">
        <span className="i">Enabling devs to be productive.</span> Maintaining
        and building features for Docker Desktop (Electron). Working on an
        internal product bringing Docker to the cloud.
      </WorkHistoryItem>

      {/* COINBASE */}
      <WorkHistoryItem
        company="Coinbase"
        role="Senior Front End Engineer"
        date="Oct 2021 - Dec 2023">
        <span className="i">
          Harnessing the power of JavaScript to build a more open financial
          system.
        </span>{' '}
        Built "Coinbase Pay" - an onramp Crypto solution using fullstack React.
        Next.js, Node, Jotai, and GraphQL.
      </WorkHistoryItem>

      {/* FACEBOOK */}
      <WorkHistoryItem
        company="Facebook"
        role="Senior Front End Engineer"
        date="May 2019 - Oct 2021">
        <span className="i">Make capacity easy to work with at scale.</span>{' '}
        Designed and built UI's for service owners to easily (&amp; happily)
        manage their backend service. Heavy work with custom forms, APIs, and
        data transformation.
      </WorkHistoryItem>

      {/* BLOOMBERG */}
      <WorkHistoryItem
        company="Bloomberg, LP"
        role="Senior Front End Engineer"
        date="June 2018 - May 2019">
        <span className="i">KYC - Entity Intelligence.</span> Using React, SSR,
        and Node to maintain applications related to fnancial data management.
        Part of an agile team releasing bi-weekly to production.
      </WorkHistoryItem>

      {/* TRANFIX */}
      <WorkHistoryItem
        company="Transfix"
        role="Front End Engineer"
        date="May 2017 - June 2018">
        <span className="i">
          Leading the revolution of the shipping industry.
        </span>{' '}
        I created a custom React app generator in Node which was used to create
        all internal applications as well as fast prototyping. Deployed
        production code daily. Testing with Cypress.
      </WorkHistoryItem>

      {/* L2, INC */}
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

      {/* ACCENTURE */}
      <WorkHistoryItem
        company="Accenture"
        role="Front End Developer"
        date="July 2015 - June 2016"
      />
    </section>
  )
}
