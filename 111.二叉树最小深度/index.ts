function minDepth (root: TreeNode | null): number {
  if (!root) return 0
  const q: [TreeNode, number][] = [[root, 1]]
  while (q.length) {
    const [n, l] = q.shift()
    if (!n.left && !n.right) return l
    if (n.left) q.push([n.left, l + 1])
    if (n.right) q.push([n.right, l + 1])
  }
}

function minDepth1 (root: TreeNode | null): number {
  if (!root) return 0
  let deep = Infinity
  const dfs = (n, l) => {
    if (!n) return
    if (!n.left && !n.right) {
      deep = Math.min(deep, l)
    }
    n.left && dfs(n.left, l + 1)
    n.right && dfs(n.right, l + 1)
  }
  dfs(root, 1)
  return deep
}
