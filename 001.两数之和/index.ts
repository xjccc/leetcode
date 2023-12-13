function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
      let index = nums.findIndex(item => item === target - nums[i])
      if (index > -1 && index !== i) {
          return [i, index]
      }
  }
  return []
}


function twoSum1(nums: number[], target: number): number[] {
  const map = new Map()
  nums.forEach((item, index) => {
      map.set(item, index)
  })
  for (let i = 0; i < nums.length; i++) {
      const idx = map.get(target - nums[i])
      if (!idx || idx === i) continue
      return [i, idx]
  }
  return []
}