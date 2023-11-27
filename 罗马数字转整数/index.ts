function romanToInt(s: string): number {
  let result = 0
  const map = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
  }
  let l = s.length
  let i = 0
  while (l > 0) {
      let t = s.slice(i, 2 + i)
      if (map[t]) {
          l -= 2
          i += 2
          result += map[t]
      } else {
          t = s.slice(i, 1 + i)
          result += map[t]
          i += 1
          l -= 1
      }
  }
  return result
}