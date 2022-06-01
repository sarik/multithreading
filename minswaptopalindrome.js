function countSwap(s) {
  var n = s.length;

  // counter to count minimum swap
  var count = 0;

  // A loop which run till mid of
  // string
  var half = Math.trunc(n / 2);
  for (let i = 0; i < half; i++) {
    // Left pointer
    let left = i;

    // Right pointer
    let right = n - left - 1;

    // A loop which run from right
    // pointer towards left pointer
    while (left < right) {
      // if both char same then
      // break the loop.
      // If not, then we have to
      // move right pointer to one
      // position left
      if (s[left] == s[right]) {
        break;
      } else {
        right--;
      }
    }

    // If both pointers are at same
    // position, it denotes that we
    // don't have sufficient characters
    // to make palindrome string
    if (left == right) {
      console.log("cant");
    }

    // else swap and increase the count
    for (let j = right; j < n - left - 1; j++) {
      console.log("swapping:", s[j], "::", s[j + 1]);
      var temp = s[j];
      s[j] = s[j + 1];
      s[j + 1] = temp;
      count++;
    }
  }
  console.log(s);
  return count;
}

//let s = "geeksfgeeks";
let s = "ntiin";

var str = s.split("");
var str1 = s.split("");
var ans1 = countSwap(s);

rev = str1.reverse();
var ans2 = countSwap(rev);

/*console.log(ans1);
rev = str1.reverse();
var ans2 = countSwap(rev);
console.log(Math.max(ans1, ans2));*/
