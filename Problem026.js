/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

function divideStep() {
  if (rest == 0) return 0;
  if (divisor > rest) {
    rest *= 10;
    division.push(rest);
    return divideStep();
  } else {
    var aux = rest;
    rest = rest%divisor;
    return Math.floor(aux/divisor);
  }
}
  
var longestRecurringCycleLength = 0;
var longestRecurringCycleIndex = 0;

for (var divisor=2; divisor<1000; divisor++) {
  var foundRepetition = false;
  var distanceToRepetition = 0;
  var rests = [1];
  var rest = 1;
  //var lastRest = 1;
  while (!foundRepetition) {
    //division.push(divideStep());
    divideStep();
    rests.push(rest);
    // Is there a loop?
    for (var i=rests.length-2; i>=0 && !foundRepetition; i--) {
      if (rests[i] != rests[rests.length-1]) continue;
      // Possible loop
      distanceToRepetition = (rests.length-1) - i;
      var repeats = (i+1)>=distanceToRepetition;
      for (var j=1; j<distanceToRepetition && repeats; j++) {
        repeats = (rests[i-j] == rests[rests.length-1-j]);
      }
      if (repeats) {
        if (distanceToRepetition>longestRecurringCycleLength) {
          longestRecurringCycleLength = distanceToRepetition;
          longestRecurringCycleIndex = divisor;
        }
        foundRepetition = true;
      }
    }
  }
}

console.log(longestRecurringCycleIndex);
