function sortedArrayToBST (nums: number[]): TreeNode | null {
  const build = function (
    nums: number[],
    l: number,
    r: number
  ): TreeNode | null {
    if (l > r) return null
    const mid = Math.floor((l + r) / 2)

    const ans = new TreeNode(nums[mid])
    ans.left = build(nums, l, mid - 1)
    ans.right = build(nums, mid + 1, r)
    return ans
  }
  return build(nums, 0, nums.length - 1)
}
