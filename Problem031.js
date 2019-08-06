/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

var ways = 0;
for (var i=(200/200); i>=0; i--) {
  for (var j=(200/100); j>=0; j--) {
    for (var k=(200/50); k>=0; k--) {
      for (var l=(200/20); l>=0; l--) {
        for (var m=(200/10); m>=0; m--) {
          for (var n=(200/5); n>=0; n--) {
            for (var o=(200/2); o>=0; o--) {
              for (var p=(200/1); p>=0; p--) {
                if ((i*200 + j*100 + k*50 + l*20 + m*10 + n*5 + o*2 + p*1)==200) ways++;
              }
            }
          }
        }
      }
    }
  }
}

console.log(ways);
// 73682
