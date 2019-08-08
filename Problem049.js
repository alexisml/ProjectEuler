/*
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?
*/

var primes = [2];
for (var n=3; n<=10000; n++) {
  var isPrime = true;
  for (var i=0; isPrime && i<primes.length && primes[i]<=Math.sqrt(n); i++) isPrime = (n%primes[i]!=0);
  if (isPrime) primes.push(n); 
}
while (primes[0]<1000) primes.shift();

function numberVariations(number) {
	var str = number.toString();
	var uniques = 0;
	for (var i=0; i<4; i++) {
		for (var j=i+1; j<=4 && str[i]!=str[j]; j++);
		if (j>4) uniques++;
	}
	switch (uniques) {
		case 1: return 1;
		case 2: return 4;
		case 3: return 12;
		default: return 16;
	}
}

function isPermutation(newone, baseline) {
	var inuse = [];
	var str = baseline.toString();
	for (var i=0; i<4; i++) inuse[parseInt(str[i])] = inuse[parseInt(str[i])] ? inuse[parseInt(str[i])]+1 : 1;
	var str = newone.toString();
	for (var i=0; i<4; i++) {
		if (!inuse[parseInt(str[i])]) return false;
		inuse[parseInt(str[i])]--;
	}
	return true;
}

function nextGreaterPermutation(number) {
	var result = number;
	do result++;
	while (result<10000 && !isPermutation(result, number));
	return (result<10000 && isPermutation(result, number)) ? result : -1;
}

function giveItATry() {
	do next = nextGreaterPermutation(next);
	while (next>current && primes.indexOf(next)<0);
	if (next<current || primes.indexOf(next)<0) return;
	nextnext = next;
	do nextnext = nextGreaterPermutation(nextnext);
	while (nextnext>next && primes.indexOf(nextnext)<0 && (nextnext-next)!=(next-current));
	if (nextnext<next || primes.indexOf(nextnext)<0 || (nextnext-next)!=(next-current)) giveItATry();
	else console.log(current + "" + next + "" + nextnext);
}

for (var n=0; n<primes.length; n++) {
	var current = primes[n];
	if (numberVariations(current)<3) continue;
	next = current;
	giveItATry(); 	
}

// 296962999629
// For some reason this doesn't give 1487.4817.8147 result
