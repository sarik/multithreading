/*If you had extra space to do it, the problem will be very easy.
Store a copy of Arr in B.

And then for every element, do Arr[i] = B[B[i]]

Lets restate what we just said for extra space :

If we could somehow store 2 numbers in every index ( that is, Arr[i] can contain the old value and the new value somehow ), then the problem becomes very easy.
NewValue of Arr[i] = OldValue of Arr[OldValue of Arr[i]]

Now, we will do a slight trick to encode 2 numbers in one index.
This trick assumes that N * N does not overflow.

1) Increase every Array element Arr[i] by (Arr[Arr[i]] % n)*n.
2) Divide every element by N.
Given a number as

   A = B + C * N   if ( B, C < N )
   A % N = B
   A / N = C
We use this fact to encode 2 numbers into each element of Arr.*/
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
