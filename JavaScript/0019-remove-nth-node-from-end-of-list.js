// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // Dummy so we can delete the real head uniformly
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // Advance fast by n+1 steps
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  // Move both until fast hits the end
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  // slow.next is the node to remove
  slow.next = slow.next.next;

  // dummy.next is the (possibly new) head
  return dummy.next;
};
