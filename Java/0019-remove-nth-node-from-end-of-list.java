// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // Dummy so we can handle removal of the head uniformly
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        
        ListNode fast = dummy;
        ListNode slow = dummy;
        
        // Advance fast by n+1 steps
        for (int i = 0; i <= n; i++) {
            fast = fast.next;
        }
        
        // Move both pointers until fast reaches the end
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        
        // slow.next is the node to remove
        slow.next = slow.next.next;
        
        // Return the real head (which may have changed)
        return dummy.next;
    }
}
