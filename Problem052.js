/*
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/

function isPermutation(base, newOne) {
	var inuse = [];
	var str = base.toString();
  if (str.length!=newOne.toString().length) return false;
	for (var i=0; i<str.length; i++) inuse[parseInt(str[i])] = inuse[parseInt(str[i])] ? inuse[parseInt(str[i])]+1 : 1;
	var str = newOne.toString();
	for (var i=0; i<str.length; i++) {
		if (!inuse[parseInt(str[i])]) return false;
		inuse[parseInt(str[i])]--;
	}
	return true;
}

for (var i=1; i<1000000; i++) {
  if (isPermutation(i, i*2)
    && isPermutation(i, i*3)
    && isPermutation(i, i*4)
    && isPermutation(i, i*5)
    && isPermutation(i, i*6)) {
      console.log(i);
      break;
  }
}

// 142857
