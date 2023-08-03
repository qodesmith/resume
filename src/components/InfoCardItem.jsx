const iconStyle = {width: '1.5em', height: '1.5em'}
const contentStyle = {marginLeft: '1em'}

export default function InfoCardItem({Icon, content, subtext}) {
  return (
    <div className="pb12">
      <div className="df">
        {Icon && <Icon style={iconStyle} fill="#4c4c4c" />}
        <div style={Icon && contentStyle}>{content}</div>
      </div>
      {subtext && <div className="i f-0-8em">{subtext}</div>}
    </div>
  )
}
