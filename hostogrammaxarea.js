let A = [90, 58, 69, 70, 82, 100, 13, 57, 47, 18];
let stack = [];
let leftSmaller = new Array(A.length).fill(-1);
let rightSmaller = new Array(A.length).fill(A.length);

for (let i = 0; i < A.length; i++) {
  while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
    stack.pop();
  }
  if (stack.length > 0) leftSmaller[i] = stack[stack.length - 1];

  stack.push(i);
}
stack = [];
for (let i = A.length - 1; i >= 0; i--) {
  while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
    stack.pop();
  }
  if (stack.length > 0) rightSmaller[i] = stack[stack.length - 1];

  stack.push(i);
}

console.log(leftSmaller);
console.log(rightSmaller);

let maxArea = 0;

for (let i = 0; i < A.length; i++) {
  let leftArea = 0;
  let rightArea = 0;
  if (leftSmaller[i] !== -1) {
    leftArea = (i - leftSmaller[i]) * A[i];
    
  }
  if (rightSmaller[i] !== A.length) {
    rightArea = (rightSmaller[i] - i) * A[i];
    console.log(rightArea);
  }

  let totalArea = leftArea + rightArea + A[i];

  
  maxArea = Math.max(maxArea, totalArea);
}

console.log(maxArea);
