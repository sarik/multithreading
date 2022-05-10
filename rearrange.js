let a = [4, 0, 2, 1, 3];

var len = a.length;
for (var i = 0; i < len; i++) {
  a[i] = parseInt(a[i]) + (a[a[i]] % len) * len;
}

console.log(a);
for (var j = 0; j < len; j++) {
  a[j] = Math.floor(a[j] / len);
}

console.log(a);
