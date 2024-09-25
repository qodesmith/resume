import {Fragment} from 'react'

const frontEndSkillz = ['React', 'Jotai ❤️', 'Vite', 'Next.js']
const backEndSkillz = ['Node', 'Bun', 'MongoDB', 'Cursor']

export default function Skillz() {
  return (
    <>
      <SkillSet type="FE" skills={frontEndSkillz} />
      <SkillSet type="BE" skills={backEndSkillz} />
    </>
  )
}

function SkillSet({skills, type}) {
  return (
    <div className="df">
      {skills.map((skill, i) => {
        // The last skill doesn't get a bullet point after it.
        if (i === skills.length - 1) {
          return (
            <div className="ws-nowrap" key={i}>
              {skill}
            </div>
          )
        }

        return (
          <Fragment key={i}>
            <div className="ws-nowrap">{skill}</div>
            <div className="mh4">•</div>
          </Fragment>
        )
      })}
    </div>
  )
}
