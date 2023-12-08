function isSameTree (p: TreeNode | null, q: TreeNode | null): boolean {
  function isSame (p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    return isSame(p.left, q.left) && isSame(p.right, q.right)
  }
  return isSame(p, q)
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree1 (p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) return true
  const queueP: Array<TreeNode | null | undefined> = [p]
  const queueQ: Array<TreeNode | null | undefined> = [q]
  while (queueP.length) {
    const nodeP = queueP.pop()
    const nodeQ = queueQ.pop()
    if (nodeP != null && nodeQ != null) {
      if (nodeP.val === nodeQ.val) {
        queueP.push(nodeP.left)
        queueP.push(nodeP.right)
        queueQ.push(nodeQ.left)
        queueQ.push(nodeQ.right)
      } else {
        return false
      }
    } else {
      if ((nodeP == null && nodeQ != null) || (nodeP != null && nodeQ == null))
        return false
    }
  }
  return queueP.length === queueQ.length
}
