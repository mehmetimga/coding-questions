/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head:ListNode=null;
    let tail:ListNode=null;
    let remainder:number = 0;

    while(l1 !== null || l2 !== null || remainder !==0){
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;

        let sum = a + b + remainder;

        remainder = Math.floor(sum / 10);
        let node = new ListNode(sum%10);

        if (!head) {
            head=node;
            tail=node;
        }else{
            tail.next=node;
            tail=tail.next;
        }

        if (l1){
            l1=l1.next;
        }
        if (l2){
            l2=l2.next;
        }
    }
    return head;
};