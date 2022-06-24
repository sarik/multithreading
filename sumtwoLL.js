function Node(data) {
  this.data = data;
  this.next = null;
}
//A : [ 9 -> 9 -> 1 ]
//B : [ 1 ]

let A = new Node(9);
A.next = new Node(9);
A.next.next = new Node(1);

let B = new Node(1);

/*let head1 = A;
let head2 = B;

let n1 = 0;
let n2 = 0;
let currPow = 0;
while (head1 !== null) {
  n1 += head1.data * Math.pow(10, currPow);
  currPow++;
  head1 = head1.next;
}
currPow = 0;
while (head2 !== null) {
  n2 += head2.data * Math.pow(10, currPow);
  currPow++;
  head2 = head2.next;
}

console.log(n1, "::", n2);
let required = n1 + n2;

required = required + "";

required = required.split("").reverse().join("");

let final = new Node();
final.data = Number(required[0]);
let curr = final;

for (let i = 1; i < required.length; i++) {
  let temp = new Node(Number(required[i]));
  curr.next = temp;
  curr = curr.next;
}
*/
let carry = 0;

let final = null;
let curr = null;

while (A !== null && B !== null) {
  let tempData;

  if (A.data + B.data + carry >= 10) {
    tempData = A.data + B.data + carry - 10;
    carry = 1;
  } else {
    tempData = A.data + B.data + carry;
    carry = 0;
  }

  let tempNode = new Node(tempData);
  if (curr === null) {
    curr = tempNode;
    final = curr;
  } else {
    curr.next = tempNode;
    curr = curr.next;
  }
  A = A.next;
  B = B.next;
}
//console.log(A);
//console.log(curr);
while (A !== null) {
  let tempData;
  if (A.data + carry >= 10) {
    tempData = A.data + carry - 10;
    carry = 1;
  } else {
    tempData = A.data + carry;
    carry = 0;
  }
  let tempNode = new Node(tempData);
  //if (curr === null) curr = tempNode;
  //else
  curr.next = tempNode;
  curr = curr.next;
  A = A.next;
}

//console.log(final);
while (B !== null) {
  let tempData;
  if (B.data + carry >= 10) {
    tempData = B.data + carry - 10;
    carry = 1;
  } else {
    tempData = B.data + carry;
    carry = 0;
  }
  let tempNode = new Node(tempData);
  //if (curr === null) curr = tempNode;
  //else
  curr.next = tempNode;
  curr = curr.next;
  B = B.next;
}
if (carry === 1) {
  let tempNode = new Node(1);
  curr.next = tempNode;
}
console.log(final);
