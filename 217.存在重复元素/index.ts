function containsDuplicate(nums: number[]): boolean {
  const len = nums.length
  const sameLen = [...new Set(nums)].length
  return len !== sameLen
}
