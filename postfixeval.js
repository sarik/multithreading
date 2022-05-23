let A = ["5", "1", "2", "+", "4", "*", "+", "3", "-"];
let stack = [];
let op1;
let op2;
let ans;

for (let i = 0; i < A.length; i++) {
  if (A[i] !== "+" && A[i] !== "-" && A[i] !== "*" && A[i] !== "/") {
    /* if (op1 === null)
                    op1 = A[i]
                else op2 = A[i] */
    stack.push(A[i]);
    console.log("pushing ", A[i]);
  } else {
    let op2 = stack.pop();
    let op1 = stack.pop();
    console.log("popping ", op2);
    console.log("popping ", op1);
    let ans;
    if (A[i] === "+") {
      ans = Number(op1) + Number(op2);
    }
    if (A[i] === "-") {
      ans = Number(op1) - Number(op2);
    }
    if (A[i] === "*") {
      ans = Number(op1) * Number(op2);
    }
    if (A[i] === "/") {
      Math.floor(Number(op1) / Number(op2));
    }

    stack.push(ans);
    console.log("pushing ", ans);
  }
}

console.log(stack);
