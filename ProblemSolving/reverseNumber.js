function reverseNumber(num) {
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reverse;
}

let number = 1234;

console.log(reverseNumber(number));

/*
Input: num = 1234

Step 1:
reverse = 0

Check num > 0
1234 > 0 is TRUE

digit = 1234 % 10 = 4
reverse = 0 * 10 + 4 = 4
num = Math.floor(1234 / 10) = 123

Step 2:
Check 123 > 0 is TRUE

digit = 123 % 10 = 3
reverse = 4 * 10 + 3 = 43
num = Math.floor(123 / 10) = 12

Step 3:
Check 12 > 0 is TRUE

digit = 12 % 10 = 2
reverse = 43 * 10 + 2 = 432
num = Math.floor(12 / 10) = 1

Step 4:
Check 1 > 0 is TRUE

digit = 1 % 10 = 1
reverse = 432 * 10 + 1 = 4321
num = Math.floor(1 / 10) = 0

Step 5:
Check 0 > 0 is FALSE
Loop stops.

Function returns 4321.

Final Output:
4321
*/
