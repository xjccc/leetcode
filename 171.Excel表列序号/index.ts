function titleToNumber (columnTitle: string): number {
  const chars = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
  }
  let s = columnTitle.split('').reverse()
  let num = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    num += Math.pow(26, i) * chars[char]
  }
  return num
}

function titleToNumber1 (columnTitle: string): number {
  const { length } = columnTitle
  let result = 0
  for (let i = 0; i < length; i += 1) {
    const c = columnTitle[length - i - 1]
    result += (c.charCodeAt(0) - 64) * 26 ** i
  }
  return result
}
