import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <div className="flex-container">
      <li className={`card-container ${className}`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src={imgUrl} alt={title} />
      </li>
    </div>
  )
}

export default CardItem
