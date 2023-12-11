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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  let leftDep = maxDepth(root.left)
  let rightDep = maxDepth(root.right)
  return Math.max(leftDep, rightDep) + 1
}

function maxDepth1(root: TreeNode | null): number {
  if (!root) return 0;
  let depth = 0, stack = [root];
  while (stack.length) {
    let length = stack.length;
    depth++;
    while (length--) {
      const node = stack.shift();
      node?.left && stack.push(node.left);
      node?.right && stack.push(node.right);
    }
  }
  return depth;
};