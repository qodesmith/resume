import {Fragment} from 'react'

const skillz = [
  'JavaScript',
  'React',
  'Recoil',
  'Webpack',
  'Node',
  'MongoDB',
  'SCSS',
]

export default function Skillz() {
  return skillz.map((skill, i) => {
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
