import React, { useEffect, useRef, useState } from 'react'

import { getSumOfIntervals, getTimeIncrement } from '../../utils/times'
import { COUNTER } from '../constants/counter'

import './index.scss'

const InfoText = ({ emphasisText, contents }) => {
  const TARGET_NUMBER = parseInt(emphasisText)

  const emphasisRef = useRef(null)
  const [highLightText, setHighLightText] = useState(
    parseInt(TARGET_NUMBER * COUNTER.START_RATE),
  )

  useEffect(() => {
    if (COUNTER.DEFAULT === TARGET_NUMBER) {
      return
    }

    let timer
    const restTexts = emphasisText.slice(`${TARGET_NUMBER}`.length)

    const SUM_OF_INTERVAL = getSumOfIntervals(TARGET_NUMBER)
    const TIME_INCREMENT = getTimeIncrement(TARGET_NUMBER, SUM_OF_INTERVAL)

    const updateCounter = (time) => {
      const CURRENT_NUMBER = parseInt(emphasisRef.current.innerText)

      if (CURRENT_NUMBER < TARGET_NUMBER) {
        time *= COUNTER.SQUARED_TIME

        const NEW_NUMBER = CURRENT_NUMBER + COUNTER.INCREMENT

        setHighLightText(
          `${
            TARGET_NUMBER < NEW_NUMBER ? TARGET_NUMBER : NEW_NUMBER
          }${restTexts}`,
        )

        timer = setTimeout(() => updateCounter(time), time)
      }
    }

    updateCounter(TIME_INCREMENT)

    return () => clearTimeout(timer)
  }, [emphasisText, TARGET_NUMBER])

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
