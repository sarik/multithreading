let A = "[[{{(({]}))}}]]";
let stack = [];

for (let i = 0; i < A.length; i++) {
  if (A[i] === "{" || A[i] === "[" || A[i] === "(") {
    stack.push(A[i]);
  } else {
    if (A[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (A[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (A[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else console.log(0);
  }
}

console.log(stack.length === 0 ? 1 : 0);
