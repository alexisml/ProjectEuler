/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

var primes = [];
for (var n=2; n<1000000; n++) {
  var isPrime = true;
  for (var i=0; i<primes.length && isPrime; i++) isPrime = (n%primes[i]!=0);
  if (isPrime) primes.push(n);
}

function numberOfRotations(number) {
  return number.toString().length;
}

function nextRotation(number) {
  return parseInt((number%10).toString() + (Math.floor(number/10)).toString());
}

var circularPrimes = 0;
for (var i=0; i<primes.length; i++) {
  var isCircular = true;
  var current = primes[i];
  for (var j=1; j<numberOfRotations(current) && isCircular; j++) {
    current = nextRotation(current);
    isCircular = primes.indexOf(current)>=0;
  }
  if (isCircular) circularPrimes++;
}

console.log(circularPrimes);
// 55
