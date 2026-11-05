function largestDigit(num) {
  let largest = 0;

  while (num > 0) {
    let digit = num % 10;

    if (digit > largest) {
      largest = digit;
    }

    num = Math.floor(num / 10);
  }

  return largest;
}

let number = 5832;

console.log("Largest digit:", largestDigit(number));

/*
Input: num = 5832

Step 1:
largest = 0

Check num > 0
5832 > 0 is TRUE

digit = 5832 % 10 = 2
2 > 0 is TRUE
largest = 2
num = Math.floor(5832 / 10) = 583

Step 2:
Check 583 > 0 is TRUE

digit = 583 % 10 = 3
3 > 2 is TRUE
largest = 3
num = Math.floor(583 / 10) = 58

Step 3:
Check 58 > 0 is TRUE

digit = 58 % 10 = 8
8 > 3 is TRUE
largest = 8
num = Math.floor(58 / 10) = 5

Step 4:
Check 5 > 0 is TRUE

digit = 5 % 10 = 5
5 > 8 is FALSE
largest remains 8
num = Math.floor(5 / 10) = 0

Step 5:
Check 0 > 0 is FALSE
Loop stops.

Function returns 8.

Final Output:
Largest digit: 8
*/
