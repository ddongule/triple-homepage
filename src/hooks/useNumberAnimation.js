import { useEffect, useState } from 'react'

import { COUNTER } from '../constants/counter'
import { getSumOfIntervals, getTimeIncrement } from '../utils/times'

const useNumberAnimation = (ref, emphasisText) => {
  const targetNumber = parseInt(emphasisText)

  const [highLightText, setHighLightText] = useState(
    parseInt(targetNumber * COUNTER.START_RATE),
  )

  useEffect(() => {
    if (COUNTER.DEFAULT === targetNumber) {
      return
    }

    let timer
    const restTexts = emphasisText.slice(`${targetNumber}`.length)
    const sumOfInterval = getSumOfIntervals(targetNumber)
    const timeIncrement = getTimeIncrement(targetNumber, sumOfInterval)

    const updateCounter = (duration) => {
      const currentNumber = parseInt(ref.current.innerText)

      if (currentNumber < targetNumber) {
        duration *= COUNTER.SQUARED_TIME

        const NEW_NUMBER = currentNumber + COUNTER.INCREMENT

        setHighLightText(
          `${
            targetNumber < NEW_NUMBER ? targetNumber : NEW_NUMBER
          }${restTexts}`,
        )
      }

      timer = setTimeout(() => updateCounter(duration), duration)
    }

    updateCounter(timeIncrement)

    return () => clearTimeout(timer)
  }, [targetNumber, ref])

  return { highLightText }
}

export default useNumberAnimation
