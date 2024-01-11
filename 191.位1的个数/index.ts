function hammingWeight(n: number): number {
  let s = n
    .toString(2)
    .split('')
    .filter((item) => +item === 1).length
  return s
}

function hammingWeight1(n: number): number {
  let res = 0
  while (n) {
    res++
    n = n & (n - 1)
  }
  return res
}