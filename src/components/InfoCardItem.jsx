const style = {width: '1.5em', height: '1.5em'}

export default function InfoCardItem({Icon, content, subtext}) {
  return (
    <div className="pb12">
      <div className="df justify-between">
        {Icon && <Icon style={style} fill="#4c4c4c" />}
        <span>{content}</span>
      </div>
      {subtext && <div className="i f-0-8em tr">{subtext}</div>}
    </div>
  )
}
