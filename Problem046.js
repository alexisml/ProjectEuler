/*
It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

var primes = [2];
for (var n=3; true; n++) {
  var isPrime = true;
  for (var i=0; i<primes.length && isPrime && primes[i]<=Math.sqrt(n); i++) isPrime = (n%primes[i]!=0);
  if (isPrime) {
    primes.push(n);
    continue;
  }
  if (n%2!=0) {
    // We are sure that the number is odd and not prime
    found = false;
    for (var i=1; !found && (n-2*i*i)>=2; i++) {
      for (var j=0; j<primes.length && (primes[j]+2*i*i)<=n; j++);
      found = ((primes[j-1]+2*i*i)==n);
    }
    if (!found) {
      console.log(n);
      break;
    }
  }
}

// 5777
