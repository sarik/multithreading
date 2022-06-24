let a = [1, 2, 3];
let ans = new Array(a.length).fill(-1);

let isCombinationFoundWhereLeftSmallerExists = false;

let stack = [];

for (let i = 0; i < a.length; i++) {
  while (stack.length > 0 && a[stack[stack.length - 1]] >= a[i]) {
    stack.pop();
  }

  if (stack.length > 0) {
    ans[i] = stack[stack.length - 1];
    isCombinationFoundWhereLeftSmallerExists = true;
  }

  stack.push(i);
}

if (!isCombinationFoundWhereLeftSmallerExists) {
  return a.sort((a, b) => a - b);
}

for (let i = a.length - 1; i >= 0; i--) {
  if (ans[i] !== -1) {
    let leftSmallerAt = ans[i];
    let temp = a[i];
    a[i] = a[leftSmallerAt];
    a[leftSmallerAt] = temp;
    return a;
  }
}
