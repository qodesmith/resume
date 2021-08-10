export default function InfoCard({title, children}) {
  return (
    <div className="ph16 pt16">
      <h1 className="mt0 mb12 ttu">{title}</h1>
      {children}
    </div>
  )
}
