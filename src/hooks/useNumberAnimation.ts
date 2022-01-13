import { useEffect, useState } from 'react'

import { COUNTER } from '../constants/counter'
import { easeOut } from '../utils/animations'

const useNumberAnimation = (emphasisText: string) => {
  const targetNumber = parseInt(emphasisText)

  const [highLightText, setHighLightText] = useState<string>(
    `${Number(targetNumber * COUNTER.startRate)}`,
  )

  useEffect(() => {
    if (COUNTER.default === targetNumber) {
      return
    }

    let timerId: number | null = null

    const restTexts = emphasisText.slice(`${targetNumber}`.length)
    const startTime = Date.now()

    const updateCounter = () => {
      const now = Date.now()

      if (now - startTime < COUNTER.duration) {
        const newCount = easeOut(
          now - startTime,
          COUNTER.default,
          targetNumber,
          COUNTER.duration,
        )

        setHighLightText(`${newCount}${restTexts}`)
      }

      timerId = window.setTimeout(updateCounter, 0)
    }

    updateCounter()

    return () => clearTimeout(timerId || -1)
  }, [emphasisText, targetNumber])

  return { highLightText }
}

export default useNumberAnimation
