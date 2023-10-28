/****
 * Reverse a linked list question01
 */

class singlyNode{
    constructor(data){
        this.data=data
        this.next=null
    }
}
function reverseLinkedList(head){
    let prev=null;
    let current=head;

    while(current !== null){
        const next=current.next;

        current.next=prev;
        prev=current;
        current=next;
    }

    return prev;
}

const node1=new singlyNode(1)
const node2=new singlyNode(2)
const node3=new singlyNode(3)

//link nodes
node1.next=node2;
node2.next=node3;


const originalHead=node1;
console.log("Original linked list")
displayLinkedList(originalHead)

const reversedHead=reverseLinkedList(originalHead)
console.log("reversed linked list")
displayLinkedList(reversedHead)


// function to display linked list
function displayLinkedList(head){
    let current=head;
    while(current !== null){
        console.log(current.data)
        current=current.next;
    }

}