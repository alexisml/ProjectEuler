/*
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, (53)=10.

In general, (nr)=n!r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

It is not until n=23, that a value exceeds one-million: (2310)=1144066.

How many, not necessarily distinct, values of (nr) for 1≤n≤100, are greater than one-million?
*/

function exceedsMillion(n, r) {
  var denom = Math.max(r, n-r);
  var other = Math.min(r, n-r);
  var current = 1.0;
  for (; n>denom; n--) {
    current *= n;
    if (current > 1000000) {
      if (other>1) {
        current /= other;
        other--;
      } else {
        return true;
      }
    }
    //console.log(current);
  }
  while (current > 1000000 && other > 1) {
    current /= other;
    other--;
  }
  return (current > 1000000);
}

var count = 0;
for (var n=1; n<=100; n++) {
  for (var r=1; r<=n; r++) {
    if (exceedsMillion(n, r)) count++;
  }
}
console.log(count);

// 4075
