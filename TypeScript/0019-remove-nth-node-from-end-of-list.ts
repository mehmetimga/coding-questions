// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Dummy node so we can remove the real head uniformly
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  // Advance fast by n+1 steps
  for (let i = 0; i <= n; i++) {
    if (fast) fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  // slow!.next is the node to remove
  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  // Return the updated head
  return dummy.next;
}
