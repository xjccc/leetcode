function isHappy(n: number): boolean {
  let set = new Set()
  while (true) {
    n = n
      .toString()
      .split('')
      .reduce((a, b) => a + Math.pow(+b, 2), 0)
    if (n === 1) return true
    if (set.has(n)) return false
    set.add(n)
  }
}
