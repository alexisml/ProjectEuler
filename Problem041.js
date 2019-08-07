/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

function oneOfEach(input, collection) {
  var used = [];
  for (var i=0; i<input.length; i++) {
    if (used.indexOf(input[i])>=0) return false;
    if (collection.indexOf(input[i])<0) return false;
    used.push(input[i]);
  }
  return used.length==collection.length;
}
function generateCollection(digits) {
  var col = [];
  for (var i=1; i<=digits; i++) col.push(i.toString());
  return col;
}

var primes = [2];
var largest = 2;
for (var n=2; n<=987654321; n++) {
  var isPrime = true;
  for (var i=0; i<primes.length && isPrime && Math.sqrt(n)>=primes[i]; i++) isPrime = (n%primes[i]!=0);
  if (isPrime) {
    if (n<=Math.sqrt(987654321)) primes.push(n);
    if (oneOfEach(n.toString(), generateCollection(n.toString().length))) largest = n;
  }
  if (n%250000==0) console.log(n); // "I'm alive", it takes a long time...
}

console.log(largest);
// 7652413
