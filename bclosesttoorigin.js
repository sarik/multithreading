let A = [
  [26, 41],
  [40, 47],
  [47, 7],
  [50, 34],
  [18, 28],
];
let B = 5;
let distance = [];
for (let i = 0; i < A.length; i++) {
  let currDis = Math.sqrt(Math.pow(A[i][0], 2) + Math.pow(A[i][1], 2));
  distance.push([currDis, i]);
}


distance = distance.sort((a, b) => a[0] - b[0]);

let ans = [];
console.log(distance)
for (let i = 0; i < B; i++) {
  let index = distance[i][1];
  ans.push(A[index]);
}

console.log(ans);
