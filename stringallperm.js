let A = ["s", "a", "r", "i"];
function swap(arr, pos1, pos2) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

let ans = [];

function genSeq(i, n, arr) {
  if (i === n) {
    //not working
    //ans.push(arr)

    //working
    let r = [...arr];
    ans.push(r);

    return;
  }

  for (let j = i; j < n; j++) {
    //handling duplicate case,not required for this question though
    //if (i !== j && arr[j] === arr[i]) continue

    swap(arr, i, j);
    genSeq(i + 1, n, arr);
    swap(arr, i, j);
  }
}

genSeq(0, A.length, A);
console.log(ans);

console.log(ans.length);
