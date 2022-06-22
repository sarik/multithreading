let A = "a*(r+o*h)";

let operators = ["^", "/", "*", "+", "-"];

let priorities = new Map();

priorities.set("^", 3);
priorities.set("/", 2);
priorities.set("*", 2);
priorities.set("+", 1);
priorities.set("-", 1);

let ans = "";

let stack = [];

for (let i = 0; i < A.length; i++) {
  if (operators.includes(A[i])) {
    while (
      stack.length > 0 &&
      priorities.get(stack[stack.length - 1]) >= priorities.get(A[i]) &&
      stack[stack.length - 1] !== "("
    ) {
      ans += stack.pop();
      //stack = stack.slice(1);
      console.log(stack, "while");
    }
    stack.push(A[i]);
  } else if (A[i] === "(") {
    stack.push("(");
  } else if (A[i] === ")") {
    while (stack[stack.length - 1] !== "(") {
      console.log("stack1", stack);
      ans += stack.pop();
      //stack = stack.slice(1);
      console.log("stack2", stack);
      //console.log(stack, "2while");
    }
    stack.pop();
  } else {
    ans += A[i];
  }
  console.log(ans, stack);
}

while (stack.length !== 0) {
  ans += stack.pop();
}
console.log(ans);
