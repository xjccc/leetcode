function searchInsert(nums: number[], target: number): number {
  if (!nums.length) return 0
  if (nums[nums.length - 1] < target) return nums.length
  let index = 0
  while (index <= nums.length) {
    if (nums[index] < target) {
      index++
    } else if (nums[index] >= target) {
      return index
    }
  }
  return index + 1
}

function searchInsert1(nums: number[], target: number): number {
  if (nums[nums.length - 1] < target) return nums.length
  let start = 0
  let end = Math.floor(nums.length / 2)

  while (start < end) {
    if (nums[start] > target) {
      return start
    }
    if (nums[start] === target) {
      return start
    }
    if (nums[start] < target && start < end) {
      start++
    }
    if (nums[end] < target && nums[nums.length - 1] >= target) {
      start = end
      end = nums.length - 1
    }
  }
  return start
}