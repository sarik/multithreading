let A = [2, 1, 2];
let left = 0;
let right = 0;

let map = new Map();
let ans = 0;

while (right < A.length) {
  if (!map.has(A[right]) || map.get(A[right]) === 0) {
    console.log("here", left, "::", right);
    if (map.has(A[right])) {
      map.set(A[right], map.get(A[right]) + 1);
    } else map.set(A[right], 1);
    ans += right - left + 1;
    //console.log(left, "::", right, "adding", right - left + 1);
    right++;
    //console.log(left, "::", right);
  } else {
    console.log("there", left, "::", right, map);
    //console.log("now here", left);
    let lastcorrectseq = right - 1 - left + 1;
    // ans += (lastcorrectseq * (lastcorrectseq + 1)) / 2;
    //while (map.get(A[left]) > 0) {
    map.set(A[left], map.get(A[left]) - 1);
    left++;
    //}
    //console.log("now there", left);
  }
  //if (right === A.length) left++;
}

//ans += right - left;
//console.log(left, right);
console.log(ans);
