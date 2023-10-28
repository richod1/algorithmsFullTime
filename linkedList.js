
// singly linked list

const { convertTypeAcquisitionFromJson } = require("typescript");

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

console.log("----circular linked list----")

// circular linked list
class CircularNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let circularnode1=new CircularNode(10)
let circularnode2=new CircularNode(20)
let circularnode3=new CircularNode(30)

circularnode1.next=circularnode2;
circularnode2.next=circularnode3;
// in circular node the last node pint to the first node
circularnode3.next=circularnode1;

// traversing the circular liked list

let circularCurrent=circularnode1;

// how to insert new node to the list
let newCircularNode=new CircularNode(15)
// assign position for list
newCircularNode.next=circularnode2;
circularnode1.next=newCircularNode;

// delete node from list
circularnode1.next=circularnode3
circularnode2=null;


do{
    console.log(circularCurrent.data)
    circularCurrent=circularCurrent.next;
}while(circularCurrent !== circularnode1)



console.log("----doubly Circular linked list---")

// doubly circular liked list
class DoublyCircularNode{
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
      }
}

const firstNode = new DoublyCircularNode(10);
const secondNode = new DoublyCircularNode(20);
const thirdNode = new DoublyCircularNode(30);

// Create a circular link
firstNode.next = secondNode;
secondNode.prev = firstNode;
secondNode.next = thirdNode;
thirdNode.prev = secondNode;

// Close the loop
thirdNode.next = firstNode;
firstNode.prev = thirdNode;


// inserting newNode
const newCircularDoublyNode=new DoublyCircularNode(15)
newCircularDoublyNode.next=secondNode;
newCircularDoublyNode.prev=firstNode;

firstNode.next=newCircularDoublyNode
secondNode.prev=newCircularDoublyNode

// traversing doubly circular list
let currentNodes = firstNode;

// while(currentNodes !== firstNode){
//     console.log(currentNodes.data);
//     currentNodes=currentNodes.next;
// }

do{
    console.log(currentNodes.data);
    currentNodes=currentNodes.next;
}while(currentNodes !== firstNode)