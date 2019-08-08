/*
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

var primes = [2];
for (var n=3; n<=1000000; n++) {
  var isPrime = true;
  for (var i=0; isPrime && i<primes.length && primes[i]<=Math.sqrt(n); i++) isPrime = (n%primes[i]!=0);
  if (isPrime) primes.push(n); 
}

var limit = 1000000;
var maxFound = 1;
var maxPrimes = 1;
for (var i=0; i<primes.length-maxPrimes; i++) {
	var currentSum = 0;
	for (var offset=0; offset<primes.length-maxPrimes-i; offset++) {
		currentSum += primes[i+offset];
		if (currentSum>limit) break;
		if (offset>maxPrimes-1 && primes.indexOf(currentSum)>=0) {
			maxFound = currentSum;
			maxPrimes = offset+1;
		}
	}
}

console.log(maxFound);
// 997651
