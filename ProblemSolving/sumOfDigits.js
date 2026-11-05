function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

let number = 1234;

console.log("Sum of digits:", sumOfDigits(number));

/*
Input: num = 1234

Step 1:
sum = 0

Check num > 0
1234 > 0 is TRUE

digit = 1234 % 10 = 4
sum = 0 + 4 = 4
num = Math.floor(1234 / 10) = 123

Step 2:
Check 123 > 0 is TRUE

digit = 123 % 10 = 3
sum = 4 + 3 = 7
num = Math.floor(123 / 10) = 12

Step 3:
Check 12 > 0 is TRUE

digit = 12 % 10 = 2
sum = 7 + 2 = 9
num = Math.floor(12 / 10) = 1

Step 4:
Check 1 > 0 is TRUE

digit = 1 % 10 = 1
sum = 9 + 1 = 10
num = Math.floor(1 / 10) = 0

Step 5:
Check 0 > 0 is FALSE
Loop stops.

Function returns 10.

Final Output:
Sum of digits: 10
*/