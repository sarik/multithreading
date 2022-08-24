let A = [0, 1, 1, 1];
let B = 0;

A = [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0];
B = 4;

let left = 0;
let right = 0;
let curr0s = 0;
let ans = 0;
let newl = 0;
let newr = 0;

while (right < A.length) {
  //console.log(left, right);
  if (A[right] === 1) {
    if (right - left + 1 > ans) {
      newl = left;
      newr = right;
    }
    ans = Math.max(ans, right - left + 1);
  } else if (A[right] === 0) {
    curr0s++;
    console.log(left, right, "first", curr0s);
    if (curr0s > B) {
      while (curr0s !== B) {
        console.log(left, A[left], curr0s);
        if (A[left] === 0) {
          curr0s--;
        }
        left++;
      }
      console.log("after");
    } else {
      if (right - left + 1 > ans) {
        newl = left;
        newr = right;
      }
      ans = Math.max(ans, right - left + 1);
    }
  }
  right++;
}

console.log(newl, newr);

let toReturn = [];

for (let i = newl; i <= newr; i++) {
  toReturn.push(i);
}

console.log(toReturn);
