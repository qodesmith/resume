import {Fragment} from 'react'

const skillz = [
  'JavaScript',
  'React',
  'Jotai',
  'Vite',
  'Node',
  'MongoDB',
  'SCSS',
]

export default function Skillz() {
  return skillz.map((skill, i) => {
    // The last skill doesn't get a bullet point after it.
    if (i === skillz.length - 1) {
      return <span key={i}>{skill}</span>
    }

    return (
      <Fragment key={i}>
        <span>{skill}</span>
        <span className="mh4">•</span>
      </Fragment>
    )
  })
}
