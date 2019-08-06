/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

function pad(num, size){ return ("0" + num).substr(-size); }
function oneOfEach(input, collection) {
  var used = [];
  for (var i=0; i<input.length; i++) {
    if (used.indexOf(input[i])>=0) return false;
    if (collection.indexOf(input[i])<0) return false;
    used.push(input[i]);
  }
  return used.length==collection.length;
}

var collection = ["0","1","2","3","4","5","6","7","8","9"];
var permutation = 123456789;
for (var n=1; n<1000000; n++) {
  var str = '';
  do {
    permutation++;
    str = pad(permutation,10);
  } while (!oneOfEach(str, collection));
}

console.log(permutation);

// 2783915460
