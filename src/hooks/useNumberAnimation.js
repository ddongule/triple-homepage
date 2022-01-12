import { useEffect, useState } from 'react'

import { COUNTER } from '../constants/counter'
import { easeOut } from '../utils/animations'

const useNumberAnimation = (emphasisText) => {
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
    const startTime = Date.now()

    const updateCounter = () => {
      const now = Date.now()

      if (now - startTime < COUNTER.DURATION) {
        const newCount = easeOut(
          now - startTime,
          COUNTER.DEFAULT,
          targetNumber,
          COUNTER.DURATION,
        )

        setHighLightText(`${newCount}${restTexts}`)
      }

      timer = setTimeout(updateCounter, 0)
    }

    updateCounter()

    return () => clearTimeout(timer)
  }, [emphasisText, targetNumber])

  return { highLightText }
}

export default useNumberAnimation
