/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
     if (!head || !head.next || k === 0) return head;

  // Step 1: Find length and tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Compute effective rotations
  k = k % length;
  if (k === 0) return head;

  // Step 3: Make it circular
  tail.next = head;

  // Step 4: Find new tail (n - k - 1)
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  // Step 5: Set new head and break circle
  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};