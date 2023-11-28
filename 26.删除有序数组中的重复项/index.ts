function removeDuplicates(nums: number[]): number {
  let expectNums = []
  for (let i = 0; i < nums.length; i++) {
      if (!expectNums.includes(nums[i])) {
          expectNums.push(nums[i])
      } else {
          nums.splice(i , 1)
          i--
      }
  }
  return expectNums.length
}
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/solutions/1007615/shan-chu-you-xu-shu-zu-zhong-de-zhong-fu-joh7/
function removeDuplicates1(nums: number[]): number {
  if (nums.length === 0) {
      return 0;
  }
  let fast = 1, slow = 1;
  while (fast < nums.length) {
      if (nums[fast] !== nums[fast - 1]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};