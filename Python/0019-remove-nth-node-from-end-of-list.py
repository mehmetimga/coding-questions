# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        # Dummy so we can delete the real head uniformly
        dummy = ListNode(0, head)
        fast = dummy
        slow = dummy

        # Advance fast by n+1 steps
        for _ in range(n + 1):
            fast = fast.next

        # Move both pointers until fast reaches the end
        while fast:
            fast = fast.next
            slow = slow.next

        # slow.next is the node to remove
        slow.next = slow.next.next

        # Return the (possibly new) head
        return dummy.next
