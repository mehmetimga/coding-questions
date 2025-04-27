// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

pub struct Solution;

impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        // Create a dummy pointing at the real head
        let mut dummy = Some(Box::new(ListNode { val: 0, next: head }));
        
        // fast will advance n+1 steps ahead of slow
        let mut fast = &dummy;
        for _ in 0..=n {
            fast = &fast.as_ref().unwrap().next;
        }
        
        // slow starts at dummy; when fast hits the end, slow is just before the node to remove
        let mut slow = &mut dummy;
        while fast.is_some() {
            fast = &fast.as_ref().unwrap().next;
            slow = &mut slow.as_mut().unwrap().next;
        }
        
        // Remove the nth node from the end
        let to_delete = slow.as_mut().unwrap().next.take();
        slow.as_mut().unwrap().next = to_delete.unwrap().next;
        
        // Return the updated list, skipping over dummy
        dummy.unwrap().next
    }
}
