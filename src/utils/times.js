import { COUNTER } from '../constants/counter'

const getInterval = (targetNumber) => {
  return parseInt(targetNumber - targetNumber * COUNTER.START_RATE) - 1
}

export const getSumOfIntervals = (targetNumber) => {
  const interval = getInterval(targetNumber)
  return Math.pow(COUNTER.RATIO, interval) - 1
}

export const getTimeIncrement = (targetNumber, totalTime) => {
  return (
    ((COUNTER.DURATION / targetNumber) *
      (targetNumber - targetNumber * COUNTER.START_RATE)) /
    totalTime
  )
}
