function inorderTraversal(root: TreeNode | null): number[] {
  let r = []
  function traversal (node: TreeNode | null, res: number[]) {
      if (!node) return
      traversal(node.left, res)
      r.push(node.val)
      traversal(node.right, res) 
  }
  traversal(root, r)
  return r
}
