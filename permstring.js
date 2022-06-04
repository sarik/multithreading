let myname = ["s", "a", "r", "i", "k"];

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function perm(i, arr, n, ans) {
  if (i === n) {
    //console.log(arr);
    ans.push([...arr]);
    return;
  }

  //iterating over all possibilities
  for (let j = i; j < n; j++) {
    //do
    swap(i, j, arr);
    perm(i + 1, arr, n, ans);
    //undo
    swap(i, j, arr);
  }
}

let ans = [];
perm(0, myname, myname.length, ans);
console.log("ans");
console.log(ans);
console.log(ans.length);

/*let namesst = "sarik"
namesst[3]="g"
console.log(namesst)*/
