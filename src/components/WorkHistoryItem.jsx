export default function WorkHistoryItem({company, role, date, children}) {
  return (
    <div className="ph16 pt12">
      <div className="df justify-between">
        <div className="b ttu">{company}</div>
        <span>{role}</span>
      </div>
      <div className="i">{date}</div>
      <div style={{fontSize: '0.85em'}}>{children}</div>
    </div>
  )
}
