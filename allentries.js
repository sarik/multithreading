let A = 2;
let B = 1;
let ans = [];

function allCombinations(A, arr, i, B) {
  if (arr.length === B) {
    //console.log(arr);
    ans.push([...arr]);
    return;
  }

  /*for (let j = i; j <= A; j++) {
    console.log("outer", j);*/
  for (let k = i; k <= A; k++) {
    arr.push(k);
    //console.log(k, arr);
    allCombinations(A, arr, k + 1, B);
    arr.pop();
  }
  //}
}

allCombinations(A, [], 1, B);

console.log(ans);
