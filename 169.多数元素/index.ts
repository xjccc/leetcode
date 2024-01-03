function majorityElement (nums: number[]): number {
  const obj: Record<string, number> = nums.reduce((prev, next) => {
    prev[next] = prev[next] ? prev[next] + 1 : 1
    return prev
  }, {})
  const len = Math.floor(nums.length / 2)
  for (let [key, value] of Object.entries(obj)) {
    if (value > len) {
      return +key
    }
  }
  return -1
}

function majorityElement1 (nums: number[]): number {
  let count = 0,
    res = -1
  for (const n of nums) {
    if (n === res) {
      count++
      continue
    }
    if (count === 0) {
      res = n
      count = 1
      continue
    }
    count--
  }
  return res
}
