let A = [1, 0, 0, 0, 1, 0, 1];
let B = 2;

/*A = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1];
B = 1;*/

A = [0, 1, 1, 1];
B = 0;

A: [0, 1, 1];
B: 3;

A = [0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
B = 7;

A = [
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0,
];
B = 7;

let left = 0;

let right = 0;

let currZeroes = 0;

let ans = 0;
let ansArr;

while (left <= right && right < A.length) {
  console.log("iter", left, right, A[left], A[right]);
  if (A[right] === 1) {
    right++;
  } else if (A[right] === 0 && left === right && B === 0) {
    left++;
    right++;
  } else if (A[right] === 0) {
    currZeroes++;

    if (currZeroes > B) {
      console.log(ans, currZeroes - 1);
      ans = Math.max(ans, right - 1 - left + 1);
      if (ans === right - 1 - left + 1) {
        ansArr = [left, right - 1];
        console.log(left, right - 1, "updating answer", ansArr);
      }

      //right--;
      if (A[left] === 0) currZeroes -= 2;
      else currZeroes--;
      console.log(currZeroes);
      left++;
    } else right++;
  }
}

if (right - left > ans) {
  ansArr = [left, right - 1];
}

let toReturn = [];

for (let i = ansArr[0]; i <= ansArr[1]; i++) {
  toReturn.push(i);
}
console.log(toReturn);
