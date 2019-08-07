/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function oneOfEach(input, collection) {
  var used = [];
  for (var i=0; i<input.length; i++) {
    if (used.indexOf(input[i])>=0) return false;
    if (input[i]=="0") return false;
    used.push(input[i]);
  }
  return used.length==collection.length;
}
var collection = ["1","2","3","4","5","6","7","8","9"];

var products = [];
for (var n=123456789; n<=987654321; n++) {
  var str = '';
  do {
    str = n.toString();
  } while (!oneOfEach(str, collection));
  // Try out partitions of the number
  for (var i=1; i<=4; i++) {
    for (var j=1; j<=5-i; j++) {
      if (
        parseInt(str.substring(0, i)) * parseInt(str.substring(i, j))
        ==
        parseInt(str.substring(i+j, 9-i-j))
      ) {
        console.log(str);
        products[parseInt(str.substring(i+j, 9-i-j))] = 1;
      }
    }
  }
}

// Another approach 

for (var i=1; i<9876543; i++) {
  if (i%100==0) console.log(i);
  //if (!oneOfEach(i.toString(), collection, false)) continue;
  for (var j=i; j<9876543; j++) {
    var str = i.toString() + j.toString() + (i*j).toString();
    if (str.length != 10) continue;
    console.log(str);
    if (oneOfEach(str, collection, true)) products[i*j] = 1;
  }
}

var sum = 0;
for (var i=0; i<products.length; i++) if (products[i]) sum++; 
    
