export const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(min, val), max)
}

export const percentRelativeValue = (percent: number, relativeStart: number, relativeEnd: number) => {
  const percent100 = Math.abs(relativeEnd - relativeStart)

  if (percent100 === 0) return 0

  const start = percent - relativeStart
  return start / percent100
}

export const proportionalValue = (val: number, min: number, max: number, expectedMin: number, expectedMax: number) => {
  const valStart = clamp(val - min, 0, max)
  const currentPercent = valStart / (max - min)
  return expectedMin + currentPercent * expectedMax
}
