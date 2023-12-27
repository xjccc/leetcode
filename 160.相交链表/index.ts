/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let set = new Set()
  let curA = headA,
    curB = headB
  while (curA !== null) {
    set.add(curA)
    curA = curA.next
  }
  while (curB !== null) {
    if (set.has(curB)) {
      return curB
    }
    curB = curB.next
  }
  return null
}
