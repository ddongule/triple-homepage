import React from 'react'
import './index.scss'

const ImageWithInfo = ({ imageSrc, infoText, align = 'row' }) => {
  return (
    <div className={`image-wrapper ${align}`}>
      <img src={imageSrc} alt={infoText} />
      <span className="image-information">{infoText}</span>
    </div>
  )
}

export default ImageWithInfo
