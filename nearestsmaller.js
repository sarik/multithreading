let A = [34, 35, 27, 42, 5, 28, 39, 20, 28];
let ans = [-1];

let stack = [A[0]];

for (let i = 1; i < A.length; i++) {
  while (stack.length > 0 && stack[stack.length - 1] > A[i]) {
    stack.pop();
  }
  if (i === 7) console.log(A[i], "stack after ", stack);

  if (stack.length) {
    ans.push(stack[stack.length - 1]);
  } else {
    ans.push(-1);
  }
  stack.push(A[i]);
}

console.log(ans);
