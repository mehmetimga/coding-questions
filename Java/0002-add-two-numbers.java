/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head=null, tail=null;
        int remainder=0;

        while (l1!=null || l2!=null || remainder!=0){
            int a = (l1!=null)?l1.val:0;
            int b = (l2!=null)?l2.val:0;

            int sum = a + b +remainder;

            remainder = sum / 10;
            ListNode node = new ListNode(sum%10);
            if (head==null){
                head=node;
                tail=node;
            }else{
                tail.next=node;
                tail=tail.next;
            }
            if (l1!=null){
                l1=l1.next;
            }
            if (l2!=null){
                l2=l2.next;
            }
        }
        return head;
    }
}
