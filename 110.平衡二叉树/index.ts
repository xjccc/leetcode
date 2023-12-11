function isBalanced (root: TreeNode | null): boolean {
  if (!root) return true
  function height (node: TreeNode | null) {
    if (!node) return 0
    return Math.max(height(node.left), height(node.right)) + 1
  }
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
function isBalanced1 (root: TreeNode | null): boolean {
  function getHeight (node) {
    if (!node) return 0
    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)
    if (leftHeight === -1 || rightHeight === -1) return -1
    if (Math.abs(leftHeight - rightHeight) > 1) return -1
    return Math.max(leftHeight, rightHeight) + 1
  }
  return getHeight(root) !== -1
}
