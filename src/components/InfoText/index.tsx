import React, { useRef } from 'react'

import useNumberAnimation from '../../hooks/useNumberAnimation'

import './index.scss'

interface InfoTextType {
  emphasisText: string
  contents: string
}

const InfoText = ({ emphasisText, contents }: InfoTextType) => {
  const emphasisRef = useRef(null)

  const { highLightText } = useNumberAnimation(emphasisText)

  return (
    <div className="info-text-wrapper">
      <span className="emphasis-text" ref={emphasisRef}>
        <strong>{highLightText}</strong>
      </span>
      {contents}
    </div>
  )
}

export default InfoText
