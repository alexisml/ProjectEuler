/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

numerators = [];
denominators = [];

for (var numerator=10; numerator<100; numerator++) {
  for (var denominator=numerator+1; denominator<100; denominator++) {
    var numeratorLast = numerator%10;
    var numeratorDec = Math.floor(numerator/10);
    var denominatorLast = denominator%10;
    var denominatorDec = Math.floor(denominator/10);
    if (numeratorLast==denominatorLast && denominatorLast!=0 && denominatorDec!=0) {
      if (numerator/denominator == numeratorDec/denominatorDec) {
        numerators.push(numerator);
        denominators.push(denominator);
      }
    } else if (numeratorLast==denominatorDec && denominatorLast!=0) {
      if (numerator/denominator == numeratorDec/denominatorLast) {
        numerators.push(numerator);
        denominators.push(denominator);
      }
    } else if (numeratorDec==denominatorLast && denominatorDec!=0) {
      if (numerator/denominator == numeratorLast/denominatorDec) {
        numerators.push(numerator);
        denominators.push(denominator);
      }
    } else if (numeratorDec==denominatorDec && denominatorLast!=0) {
      if (numerator/denominator == numeratorLast/denominatorLast) {
        numerators.push(numerator);
        denominators.push(denominator);
      }
    }
  }
}

// Calculate product of fractions
var numerator = 1;
var denominator = 1;
for (var i=0; i<numerators.length; i++) {
  numerator *= numerators[i];
  denominator *= denominators[i];
}

// Simplify
for (var i=2; i<=numerator; i++) {
  if (numerator%i==0 && denominator%i==0) {
    numerator = numerator/i;
    denominator = denominator/i;
    i = 1;
  }
}

console.log(denominator);
// 100
