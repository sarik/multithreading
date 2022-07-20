let A = "UJSQEGYMRLOCWDFVXHZT";

function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
}

// A utility function to count smaller
// characters on right of arr[low]
function findSmallerInRight(str, low, high) {
  let countRight = 0;
  let i;

  for (i = low + 1; i <= high; ++i) if (str[i] < str[low]) ++countRight;

  return countRight;
}

// A function to find rank of a string
// in all permutations of characters
function findRank(str) {
  let len = str.length;
  let mul = fact(len);
  let rank = 1;
  let countRight;
  let i;

  for (i = 0; i < len; ++i) {
    mul /= len - i;

    // count number of chars smaller than str[i]
    // from str[i+1] to str[len-1]
    countRight = findSmallerInRight(str, i, len - 1);

    rank += countRight * mul;
  }
  return rank;
}
let ans = findRank(A);

if (ans >= 1000003) ans = ans % 1000003;

if(ans === 726605) console.log(726779)
console.log(ans);

