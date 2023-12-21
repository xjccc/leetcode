function singleNumber (nums: number[]): number {
  const obj = nums.reduce((prev, next) => {
    prev[next] = prev[next] ? prev[next] + 1 : 1
    return prev
  }, {})
  let i = 0
  while (i < nums.length) {
    if (obj[nums[i]] === 1) {
      return nums[i]
    }
    i++
  }
  return -1
}

function singleNumber1 (nums: number[]): number {
  return nums.reduce((a, b) => a ^ b)
}
