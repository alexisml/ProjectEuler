/*
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/

function oneOfEach(input) {
  var used = [];
  var n = input;
  for (var i=0; i<10; i++) {
    var r = n%10;
    if (used[r]) return false;
    used[r] = true;
    n = (n-r)/10;
  }
  return true;
}

var sum = 0;
for (var n=1023456789; n<=9876543210; n++) {
  if (n%2500000==0) console.log(n); // I'm alive
  if (!oneOfEach(n)) continue;
  var str = n.toString();
  if (
    (parseInt(str.substr(1,3))%2)==0 && 
    (parseInt(str.substr(2,3))%3)==0 && 
    (parseInt(str.substr(3,3))%5)==0 && 
    (parseInt(str.substr(4,3))%7)==0 && 
    (parseInt(str.substr(5,3))%11)==0 && 
    (parseInt(str.substr(6,3))%13)==0 && 
    (parseInt(str.substr(7,3))%17)==0
  ) { 
    sum += n; 
  };
}

console.log(sum);
// 16695334890
