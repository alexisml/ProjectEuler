/*
The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

var primes = [2];
var primeFactors = [1,1,1,1];
for (var n=3; true; n++) {
  var countDivisors = 0; // Itself
  for (var i=0; i<primes.length && primes[i]<=n/2; i++) {
    if (n%primes[i]==0) countDivisors++;
  }
  if (countDivisors==0) primes.push(n); // It is prime
  primeFactors.push(countDivisors);
  primeFactors.shift();
  for (var i=0; i<4 && primeFactors[i]>=4; i++);
  if (i==4) {
    console.log(n-4+1);
    break;
  }
}

// 134043
