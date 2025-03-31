/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var head, tail *ListNode
	remainder := 0

	for l1 != nil || l2 != nil || remainder != 0 {
		a, b := 0, 0

		if l1 != nil {
			a = l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			b = l2.Val
			l2 = l2.Next
		}

		node := &ListNode{}
		node.Val = (a + b + remainder) % 10
		remainder = (a + b + remainder) / 10

		if head == nil {
			head = node
			tail = node
		} else {
			tail.Next = node
			tail = tail.Next
		}

	}
	return head
}