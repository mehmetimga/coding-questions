// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
pub fn add_two_numbers(
        mut l1: Option<Box<ListNode>>,
        mut l2: Option<Box<ListNode>>
    ) -> Option<Box<ListNode>> {
        let mut dummy_head = Box::new(ListNode::new(0));
        let mut tail = &mut dummy_head;
        let mut carry = 0;

        while l1.is_some() || l2.is_some() || carry != 0 {
            let a = l1.as_ref().map_or(0, |node| node.val);
            let b = l2.as_ref().map_or(0, |node| node.val);

            let sum = a + b + carry;
            carry = sum / 10;

            tail.next = Some(Box::new(ListNode::new(sum % 10)));
            tail = tail.next.as_mut().unwrap();

            l1 = if let Some(node) = l1 { node.next } else { None };
            l2 = if let Some(node) = l2 { node.next } else { None };
        }

        dummy_head.next
    }
}