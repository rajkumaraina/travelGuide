import './index.css'

const EachPlace = props => {
  const {item} = props
  const {id, name, imageUrl, description} = item
  return (
    <li className="listItem">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </li>
  )
}
export default EachPlace
