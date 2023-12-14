function generate (numRows: number): number[][] {
  if (numRows < 2) return [[1]]
  let n = 1
  let r = [[1]]
  while (n < numRows) {
    n++
    let s = Array(n).fill(1)
    for (let i = 1; i < n - 1; i++) {
      s[i] = r[n - 2][i - 1] + r[n - 2][i]
    }
    r.push(s)
  }
  return r
}

function generate1 (numRows: number): number[][] {
  const arr = []
  for (let i = 0; i < numRows; i++) {
    arr[i] = []
    for (let j = 0; j <= i; j++) {
      if (i === 0 || j === 0 || j === i) {
        arr[i][j] = 1
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
      }
    }
  }
  return arr
}
