exports.lineDefaultTemplate = function lineDefaultTemplate(props) {
  const parts = [
    props.timestamp ? `[${props.timestamp}]` : '',
    props.label ? `[${props.label}]` : '',
    props.level ? `[${props.level}]` : '',
    props.from ? `[${props.from}]` : '',
    props.message ? ` - ${props.message}` : '',
  ]

  return parts
    .filter((value) => value)
    .join('');
}
