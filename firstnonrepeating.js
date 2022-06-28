let A = "ptp";
let queue = [];
let map = new Map();

queue.push(A[0]);
let ans = [];
ans.push(A[0]);
map.set(A[0], 1);

for (let i = 1; i < A.length; i++) {
  if (map.has(A[i])) {
    map.set(A[i], map.get(A[i]) + 1);
    while (map.get(queue[0]) > 1) {
      queue = queue.slice(1);
    }
  } else {
    map.set(A[i], 1);
    queue.push(A[i]);
  }

  if (queue.length) ans.push(queue[0]);
  else ans.push("#");
}
console.log(ans.join(""));
