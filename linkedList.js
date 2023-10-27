
// singly linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}



const node1=new Node(10)
const node2=new Node(20)
const node3=new Node(30)

node1.next=node2
node2.next=node3


const head=node1;

const newNode=new Node(15)
newNode.next=node2
node1.next=newNode


let current=head

while(current !== null){
    console.log(current.data)
    current=current.next;
}


console.log("-----------")

// doubly linked list
class DoublyNode{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

let nodes1=new DoublyNode(10)
let nodes2=new DoublyNode(20)
let nodes3=new DoublyNode(30)


// linking nodes
nodes1.next=nodes2;
nodes2.next=nodes3;

// linking previous nodes
nodes2.prev=nodes1;
nodes3.prev=nodes2;


// insert new node to linkedlist
const newNodes=new Node(15)

newNodes.next=nodes2;
newNodes.prev=nodes1;

nodes1.next=newNodes;
nodes2.prev=newNodes;

// delete node2
nodes1.next=nodes3;
nodes3.prev=nodes1;
nodes2=null;

// assume head is node1 
const heads=nodes1;

// traversing doubly linked


let currents=heads
while(currents !== null){
    console.log(currents.data)
    currents=currents.next;
}


console.log("---prev----")
currents=nodes3
while(currents !== null){
    console.log(currents.data)
    currents=currents.prev
}