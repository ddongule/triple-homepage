import React from 'react'
import './index.scss'

interface ImagesWithInfo {
  imageSrc: string
  infoText: string
  align?: string
}

const ImageWithInfo = ({
  imageSrc,
  infoText,
  align = 'row',
}: ImagesWithInfo) => {
  return (
    <div className={`image-wrapper ${align}`}>
      <img src={imageSrc} alt={infoText} />
      <span className="image-information">{infoText}</span>
    </div>
  )
}

export default ImageWithInfo
