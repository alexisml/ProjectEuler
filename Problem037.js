/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

function isTruncatablePrime(prime, side) {
  if (prime<10) return primes.indexOf(prime)>=0;
  return (
    (primes.indexOf(prime)>=0)
    &&
    (side=="LEFT" || ((side=="ALL" || side=="RIGHT") && isTruncatablePrime(prime%Math.pow(10,prime.toString().length-1), "RIGHT")))
    && 
    (side=="RIGHT" || ((side=="ALL" || side=="LEFT") && isTruncatablePrime(Math.floor(prime/10), "LEFT")))
  );
}

var primes = [2];
var truncatablePrimes = [];
while (truncatablePrimes.length<11) {
  var found = false;
  for (var n=primes[primes.length-1]+1; !found; n++) {
    var isPrime = true;
    for (var i=0; i<primes.length && isPrime; i++) isPrime = (n%primes[i]!=0);
    if (isPrime) {
      primes.push(n);
      found = n>=10 && isTruncatablePrime(n, "ALL");
      if (found) truncatablePrimes.push(n);
    }
  }
}

var sum = 0;
for (var i=0; i<truncatablePrimes.length; i++) sum += truncatablePrimes[i];

console.log(sum);
// 748317
