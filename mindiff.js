let A = [814, 761, 697, 483, 981];

let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;

for (let i = 0; i < A.length; i++) {
  if (A[i] > max) {
    max = A[i];
    //maxIndex = i
  }
  if (A[i] < min) {
    min = A[i];
    //minIndex = i
  }
}

console.log(max);
console.log(min);

let minPointer = -1;
let maxPointer = -1;

let ans = A.length;

for (let i = 0; i < A.length; i++) {
  if (A[i] === min) {
    minPointer = i;
  }
  if (A[i] === max) {
    maxPointer = i;
  }

  if (minPointer !== -1 && maxPointer !== -1)
    ans = Math.min(ans, Math.abs(maxPointer - minPointer) + 1);
}

console.log(maxPointer);
console.log(minPointer);
console.log(ans);
