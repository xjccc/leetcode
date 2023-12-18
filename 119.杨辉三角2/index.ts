function getRow (rowIndex: number): number[] {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  let n = 1
  let r = [[1]]
  while (n <= rowIndex) {
    n++
    let s = Array(n).fill(1)
    for (let i = 1; i < n - 1; i++) {
      s[i] = r[n - 2][i - 1] + r[n - 2][i]
    }
    r.push(s)
  }
  return r[rowIndex]
}

function getRow1 (rowIndex: number): number[] {
  const length = rowIndex + 1
  const result: number[] = new Array(length).fill(1)
  for (let i = 1; i < length; i += 1) {
    result[i] = (result[i - 1] * (rowIndex - i + 1)) / i
  }
  return result
}
