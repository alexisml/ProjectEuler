/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

function oneOfEach(input, collection, strict) {
  var used = [];
  for (var i=0; i<input.length; i++) {
    if (used.indexOf(input[i])>=0) return false;
    if (input[i]=="0") return false;
    used.push(input[i]);
  }
  return ((!strict) || (strict && used.length==collection.length));
}
var collection = ["1","2","3","4","5","6","7","8","9"];

var greatest = 0;
for (var n=98765; n>=9; n--) {
  if (!oneOfEach(n.toString(), collection, false)) continue;
  var concat = n.toString();
  for (var mult=2; concat.length<9; mult++) {
    concat += (n*mult).toString();
  }
  if (oneOfEach(concat, collection, true) && parseInt(concat)>greatest) greatest = parseInt(concat);
}

console.log(greatest);
// 932718654
