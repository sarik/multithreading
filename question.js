//Given linked list
//1 2 3 4 5 6 7 8
//Reverse linked list
//8 7 6 5 4 3 2 1

//1 <-2  3 4

//prev 1
//curr 2

//temp = curr.next
//curr.next = prev
//prev = curr
//curr = temp

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let A = new Node(1);
let B = new Node(2);
let C = new Node(3);
let D = new Node(4);
let E = new Node(5);
let F = new Node(6);
let G = new Node(7);
let H = new Node(8);

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;
F.next = G;
G.next = H;

//1 2 3 4

//prev = 1
//curr = 2
//temp = 3

//1 <- 2 3-> 4

/*function reverseLL(root) {
  //If I have 0 or 1 node only,return the LL
  if (root === null || root.next === null) return root;

  let prev = null;
  let curr = root;
  let temp;

  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}
*/
function printLL(root) {
  let temp = root;

  while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
  }
}

function reverseLLRec(root) {
  if (root.next === null) return root;

  let temp = root.next;
  //root.next = null;
  let newHead = reverseLLRec(root.next);
  temp.next = root;
  root.next = null;
  return newHead;
}

function reverse(head) {
  if (head == null) {
    return head;
  }

  // last node or only one node
  if (head.next == null) {
    return head;
  }

  let newHeadNode = reverse(head.next);

  // change references for middle chain
  head.next.next = head;
  head.next = null;

  // send back new head node in every recursion
  return newHeadNode;
}
//printLL(A);
console.log("****");

//printLL(reverseLL(A));
printLL(reverseLLRec(A, A));
