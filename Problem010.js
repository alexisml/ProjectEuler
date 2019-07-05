/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var sum = 0;
for (var i=2; i<2000000; i++) {
  var j=2;
  for (; i%j!=0 && j<=Math.sqrt(i); j++);
  if (j<=Math.sqrt(i)) continue;
  sum += i;
}
console.log(sum);

// 142913828922
