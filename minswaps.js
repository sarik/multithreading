/*let A = [
  52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5,
  84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29,
  7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70,
];*/
let A = [1, 12, 10, 3, 14, 10, 5];
let B = 8;
let index = -1;
let greaterThanB = 0;
let smallerThanB = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] > B) {
    if (index === -1) index = i;
    greaterThanB++;
  } else if (A[i] <= B) {
    smallerThanB++;
  }
}

console.log(greaterThanB);

console.log(smallerThanB);
let windowSize = smallerThanB;

let undesirables = 0;
for (let i = 0; i < windowSize; i++) {
  if (A[i] > B) {
    undesirables++;
  }
}

let globalUndesiable = undesirables;

console.log(globalUndesiable, "g");

for (let i = windowSize; i < A.length; i++) {
  if (A[i] > B) undesirables++;
  if (A[i - windowSize] > B) undesirables--;

  console.log(undesirables);

  globalUndesiable = Math.min(undesirables, globalUndesiable);
}

console.log(globalUndesiable);
