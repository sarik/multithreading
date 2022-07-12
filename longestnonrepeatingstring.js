let A = "bbbbb";
let i = 0;

let map = new Map();
let count = 0;
let ans = 0;
let iter = 0;
while (i < A.length) {
  if (map.has(A[i])) {
    //console.log("here for", i);
    ans = Math.max(ans, count);
    count = 0;
    i = map.get(A[i]);
    //map.delete(A[i]);
    map.clear();
  } else {
    count++;
    map.set(A[i], i);
  }
  i++;
  iter++;
  //console.log(i);
}

ans = Math.max(ans, count);

console.log(count);
console.log(ans);
console.log(iter);
