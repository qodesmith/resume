import {
  Email,
  Phone,
  Location,
  Github,
  Typewriter,
  Toolbox,
  Calendar,
  Css,
  LinkedIn,
} from './Icons'
import InfoCard from './InfoCard'
import InfoCardItem from './InfoCardItem'
import Skillz from './Skillz'

export default function InfoCards() {
  return (
    <section className="flex-shrink-0 w-40">
      {/* TOP SKILLS */}
      <InfoCard title="Top Skills">
        <Skillz />
      </InfoCard>
      <InfoCard title="Contact">
        <InfoCardItem
          Icon={Github}
          content={
            <a href="https://github.com/qodesmith" target="_blank">
              github.com/qodesmith
            </a>
          }
        />
        <InfoCardItem
          Icon={Email}
          content={
            <a href="mailto:theqodesmith@gmail.com" target="_blank">
              theqodesmith@gmail.com
            </a>
          }
        />
        <InfoCardItem Icon={Phone} content="917.524.7817" />
        <InfoCardItem
          Icon={LinkedIn}
          content={
            <a href="https://www.linkedin.com/in/cordovaaaron/">LinkedIn</a>
          }
        />
        <InfoCardItem Icon={Location} content="NJ" />
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
              <div className="b">
                <a href="https://generalassemb.ly">General Assembly</a>
              </div>
              <div className="i f-0-8em">Full stack coding bootcamp</div>
            </>
          }
        />
        <InfoCardItem
          content={
            <>
              <div className="b">
                <a href="https://en.wikipedia.org/wiki/Institute_of_Audio_Research">
                  Institute of Audio Research
                </a>
              </div>
              <div className="i f-0-8em">Digital audio recording</div>
            </>
          }
        />
        <InfoCardItem
          content={
            <>
              <div className="b">The Cittone Institute</div>
              <div className="i f-0-8em">Analog and digital circuitry</div>
            </>
          }
        />
        <InfoCardItem
          content={
            <>
              <div className="b">The School of Hard Knocks</div>
              <div className="i f-0-8em">Life wisdom from the pavement</div>
            </>
          }
        />
      </InfoCard>
    </section>
  )
}
