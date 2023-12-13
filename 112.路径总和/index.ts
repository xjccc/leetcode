function hasPathSum (root: TreeNode | null, targetSum: number): boolean {
  let res = false
  const dfs = (root: TreeNode | null, target: number) => {
    if (!root) return
    target -= root.val
    if (!root.left && !root.right && target === 0) {
      res = true
      return
    }
    dfs(root.left, target)
    dfs(root.right, target)
  }

  dfs(root, targetSum)
  return res
}

function hasPathSum1 (root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  else if (!root.left && !root.right) return root.val === targetSum
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}
