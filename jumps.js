let A = [
  3, 6, 6, 10, 6, 1, 3, 1, 10, 1, 1, 10, 1, 7, 7, 2, 3, 1, 2, 4, 5, 8, 7, 2, 6,
  8, 6, 7, 5, 4, 10, 4, 8, 10, 8,
];

A = [1, 2, 3, 4, 5];
A = [
  3, 6, 6, 10, 6, 1, 3, 1, 10, 1, 1, 10, 1, 7, 7, 2, 3, 1, 2, 4, 5, 8, 7, 2, 6,
  8, 6, 7, 5, 4, 10, 4, 8, 10, 8,
];
//A = [1, 1];
let jumps = 0;

console.log(A.length);
let i = 0;
while (i < A.length) {
  console.log(i, "::", jumps, "::", i);
  let curr = i;

  if (i === A.length - 1) {
    console.log(jumps, "p plus");
    break;
  } else if (i + A[i] >= A.length) {
    console.log(jumps + 1, "plus");
    break;
  }
  if (A[curr] === 0) {
    console.log("returning");
    break;
  }

  let maxIndexYouCanReach = i + A[i];

  let max = Number.MIN_VALUE;
  for (let j = curr + 1; j <= maxIndexYouCanReach; j++) {
    if (A[j] + j >= max) {
      max = A[j] + j;
      i = j;
    }
  }
  jumps++;
}
console.log(jumps);
