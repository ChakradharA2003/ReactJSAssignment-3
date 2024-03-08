import './index.css'

const ThumbNailImage = props => {
  const {imageUrl, thumbnailUrl, onClickedThumbNail} = props
  const thumbNailClicked = () => {
    onClickedThumbNail(imageUrl)
  }
  return (
    <li>
      <button type="button" className="image-btn" onClick={thumbNailClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}
export default ThumbNailImage
