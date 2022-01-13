export const easeOut = (startTime, startNumber, diff, duration) => {
  return Math.floor(
    startTime === duration
      ? startNumber + diff
      : diff * (-Math.pow(2, (-10 * startTime) / duration) + 1) +
          startNumber +
          1,
  )
}
