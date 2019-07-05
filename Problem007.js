/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var last_prime = 1;
var count_primes = 0;
for (var i=2; count_primes<10001; i++) {
  var j=2;
  for (; i%j!=0 && j<=Math.sqrt(i); j++);
  if (j<=Math.sqrt(i)) continue;
  last_prime = i;
  count_primes++;
}
console.log(last_prime);

// 104743
