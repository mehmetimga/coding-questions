# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head =None
        remainder=0

        while l1 or l2 or remainder:
            a=l1.val if l1 else 0
            b=l2.val if l2 else 0
            newnode=ListNode()
                

            newnode.val = (a+b+remainder)%10
            remainder= (a+b+remainder)//10

            if head==None:
                head=newnode
                tail=newnode
            else:
                tail.next=newnode
                tail=tail.next

            if l1:
                l1=l1.next
            if l2:
                l2=l2.next

        return head
        