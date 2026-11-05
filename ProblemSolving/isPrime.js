function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let number = 7;

if (isPrime(number)) {
  console.log(number + " is a Prime Number");
} else {
  console.log(number + " is Not a Prime Number");
}

/*
Input: num = 7

Step 1:
Check if num <= 1
7 <= 1 is FALSE
So, continue.

Step 2:
Start for loop:
i = 2
Check i < 7
2 < 7 is TRUE

Check 7 % 2 === 0
7 % 2 = 1
Condition is FALSE.
Continue loop.

Step 3:
i = 3
Check 3 < 7
Condition is TRUE.

Check 7 % 3 === 0
7 % 3 = 1
Condition is FALSE.
Continue loop.

Step 4:
i = 4
Check 4 < 7
Condition is TRUE.

Check 7 % 4 === 0
7 % 4 = 3
Condition is FALSE.
Continue loop.

Step 5:
i = 5
Check 5 < 7
Condition is TRUE.

Check 7 % 5 === 0
7 % 5 = 2
Condition is FALSE.
Continue loop.

Step 6:
i = 6
Check 6 < 7
Condition is TRUE.

Check 7 % 6 === 0
7 % 6 = 1
Condition is FALSE.
Continue loop.

Step 7:
i = 7
Check 7 < 7
Condition is FALSE.
Loop stops.

Step 8:
Function returns TRUE.

Final Output:
7 is a Prime Number
*/
