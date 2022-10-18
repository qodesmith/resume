import {
  Email,
  Phone,
  Location,
  Github,
  Website,
  Typewriter,
  Toolbox,
  Calendar,
  Css,
} from './Icons'
import InfoCard from './InfoCard'
import InfoCardItem from './InfoCardItem'

export default function InfoCards() {
  return (
    <section className="w-40 flex-shrink-0">
      <InfoCard title="Contact">
        <InfoCardItem
          Icon={Email}
          content={
            <a href="mailto:theqodesmith@gmail.com" target="_blank">
              theqodesmith@gmail.com
            </a>
          }
        />
        <InfoCardItem Icon={Phone} content="917.524.7817" />
        <InfoCardItem Icon={Location} content="NJ" />
      </InfoCard>
      <InfoCard title="Portfolio">
        <InfoCardItem
          Icon={Github}
          content={
            <a href="https://github.com/qodesmith" target="_blank">
              github.com/qodesmith
            </a>
          }
        />
        {/* <InfoCardItem
          Icon={Website}
          content={
            <a href="http://freestylefam.com" target="_blank">
              freestylefam.com
            </a>
          }
        /> */}
      </InfoCard>
      <InfoCard title="Open Source">
        <InfoCardItem
          Icon={Typewriter}
          content={
            <a href="https://github.com/qodesmith/typer" target="_blank">
              Typer.js
            </a>
          }
          subtext="Typewriter library with tons of functionality."
        />
        <InfoCardItem
          Icon={Toolbox}
          content={
            <a
              href="https://github.com/qodesmith/create-new-app"
              target="_blank">
              Create New App
            </a>
          }
          subtext="Custom fullstack React app generator."
        />
        <InfoCardItem
          Icon={Calendar}
          content={
            <a href="https://github.com/qodesmith/datepicker" target="_blank">
              Datepicker
            </a>
          }
          subtext="Datepicker in vanilla JS."
        />
        <InfoCardItem
          Icon={Css}
          content={
            <a href="https://github.com/qodesmith/sassyons" target="_blank">
              Sassyons
            </a>
          }
          subtext="Before Tailwind was cool."
        />
      </InfoCard>
      <InfoCard title="Education">
        <InfoCardItem
          content={
            <>
              <div className="b">General Assembly</div>
              <div className="ml8">Full stack coding bootcamp</div>
            </>
          }
        />
        <InfoCardItem
          content={
            <>
              <div className="b">Institute of Audio Research</div>
              <div className="ml8">Digital audio recording</div>
            </>
          }
        />
        <InfoCardItem
          content={
            <>
              <div className="b">The Cittone Institute</div>
              <div className="ml8">Analog and digital circuitry</div>
            </>
          }
        />
        <InfoCardItem
          content={
            <>
              <div className="b">The School of Hard Knocks</div>
              <div className="ml8">Life wisdom from the pavement</div>
            </>
          }
        />
      </InfoCard>
    </section>
  )
}
