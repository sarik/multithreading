let A = [1, 17, 8];
A = [2, 2, 2];
/*A = [
  454151474, 835656545, 175492140, 335891091, 279873319, 477005930, 393944419,
];*/
A=[ 36229, 1020, 69, 127, 162, 127 ]
function swap(arr, pos1, pos2) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

let ans = [];

function genSeq(i, n, arr) {
  if (i === n) {
    let r = [...arr];
    ans.push(r);

    return;
  }

  for (let j = i; j < n; j++) {
    if (A[i] === A[j] && i !== j) continue;
    swap(arr, i, j);
    let curr = [...arr];
    let isSqaure = false;
    {
      if (i === 0) isSqaure = true;
      else {
        /*let max = Math.max(curr[i], curr[i - 1]);
        let ii = 1;
        while (ii <= max) {
          console.log("here");
          if (ii * ii === curr[i] + curr[i - 1]) {
            isSqaure = true;
            break;
          }
          ii++;
        }
        console.log("there");*/
        isSqaure =
          Math.sqrt(curr[i] + curr[i - 1]) ===
          Math.floor(Math.sqrt(curr[i] + curr[i - 1]));
        //console.log(curr[i], curr[i - 1],isSqaure)
      }
    }
    if (isSqaure) {
      //if (true) {
      genSeq(i + 1, n, arr);
    }

    swap(arr, i, j);
  }
}

genSeq(0, A.length, A);

console.log(ans);
