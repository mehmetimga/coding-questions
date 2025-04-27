// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	// Dummy so deletions at head are uniform
	dummy := &ListNode{Next: head}
	fast, slow := dummy, dummy

	// Move fast ahead by n+1 steps
	for i := 0; i <= n; i++ {
		fast = fast.Next
	}
	// Advance both until fast reaches the end
	for fast != nil {
		fast = fast.Next
		slow = slow.Next
	}
	// slow.Next is the node to remove
	slow.Next = slow.Next.Next

	return dummy.Next
}
