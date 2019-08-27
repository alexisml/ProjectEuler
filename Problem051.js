/*
By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family
*/

// Find primes
var primes = [2];
for (var n=3; n<1000000; n++) {
  var isPrime = true;
  for (var i=0; isPrime && i<primes.length && primes[i]<=Math.sqrt(n); i++) isPrime = (n%primes[i]!=0);
  if (isPrime) primes.push(n); 
}

// Find primes with repeated digits
function hasRepeated(number) {
  var arr = number.toString().split("");
  var poped = null;
  do {
    poped = arr.pop();
  } while (poped!=null && !arr.includes(poped));
  poped = null; // Again
  do {
    poped = arr.pop();
  } while (poped!=null && !arr.includes(poped));
  return arr.includes(poped);
}
var primesWithRepeated = [];
for (var n=0; n<primes.length; n++) {
  if (primes[n]<100000) continue;
  if (hasRepeated(primes[n])) primesWithRepeated.push(primes[n]);
}

// Find with repeated 0, 1 or 2 (if not, cant be member of 8 family)
function hasRepeatedZeroOneOrTwo(number) {
  var str = number.toString();
  for (var i=0; i<=2; i++) {
    var first = str.indexOf(i.toString());
    if (first>=0 && str.indexOf(i.toString(),first+1)>0 && str.indexOf(i.toString(),first+1)<str.length-1) return true;
  }
  return false;
}
var pwrWithZeroOneOrTwo = [];
for (var n=0; n<primesWithRepeated.length; n++) {
  if (hasRepeatedZeroOneOrTwo(primesWithRepeated[n])) pwrWithZeroOneOrTwo.push(primesWithRepeated[n]);
}

// Now find the ones that we are looking at
function hasRepeatedDigit(number, digit) {
  var str = number.toString();
  var dig = digit.toString();
  var first = str.indexOf(dig);
  return (first>=0 && str.indexOf(dig,first+1)>0);
}

for (var i=0; i<pwrWithZeroOneOrTwo.length; i++) {
  var count = 1;
  var firstRepeated = 2;
  if (hasRepeatedDigit(pwrWithZeroOneOrTwo[i], 0)) {
    firstRepeated = 0;
  } else if (hasRepeatedDigit(pwrWithZeroOneOrTwo[i], 1)) {
    firstRepeated = 1;
  } // else it is 2
  for (var n=firstRepeated+1; n<10; n++) {
    var number = parseInt(
      pwrWithZeroOneOrTwo[i].toString()
        .replace(firstRepeated.toString(), n.toString())
        .replace(firstRepeated.toString(), n.toString())
        .replace(firstRepeated.toString(), n.toString())
    );
    if (primesWithRepeated.includes(number)) {
      count++;
      if (count>2)console.log("Original: " + pwrWithZeroOneOrTwo[i] + " Variation: " + number + " Count: " + count);
    }
  }
  if (count>=8) {
    console.log(pwrWithZeroOneOrTwo[i]);
    break;
  }
}

// Tried with 2 repetitions with no luck; 3 works!
// 121313
