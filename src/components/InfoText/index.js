import React, { useRef } from 'react'

import useNumberAnimation from '../../hooks/useNumberAnimation'

import './index.scss'

const InfoText = ({ emphasisText, contents }) => {
  const emphasisRef = useRef(null)

  const { highLightText } = useNumberAnimation(emphasisRef, emphasisText)

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
