const style = {width: '1.5em', height: '1.5em'}

export default function InfoCardItem({Icon, content}) {
  return (
    <div className="df justify-between pb12">
      {Icon && <Icon style={style} fill="#4c4c4c" />}
      <span>{content}</span>
    </div>
  )
}
