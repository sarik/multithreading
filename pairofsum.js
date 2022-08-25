let A = [1, 2, 3, 4, 5];
let B = 5;
let left = 0;
let right = A.length - 1;

let ans = 0;

while (left < right) {
  console.log(left, "::", right);
  if (A[left] + A[right] === B) {
    console.log("here");
    ans++;
    left++;
    right--;
  } else if (A[left] + A[right] < B) {
    left++;
  } else if (A[left] + A[right] > B) right--;
}

console.log(ans);
