function isPalindrome(num) {
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reverse;
}

let number = 121;

if (isPalindrome(number)) {
  console.log(number + " is a Palindrome Number");
} else {
  console.log(number + " is Not a Palindrome Number");
}

/*
Input: num = 121

Step 1:
original = 121
reverse = 0

Check num > 0
121 > 0 is TRUE

digit = 121 % 10 = 1
reverse = 0 * 10 + 1 = 1
num = Math.floor(121 / 10) = 12

Step 2:
Check 12 > 0 is TRUE

digit = 12 % 10 = 2
reverse = 1 * 10 + 2 = 12
num = Math.floor(12 / 10) = 1

Step 3:
Check 1 > 0 is TRUE

digit = 1 % 10 = 1
reverse = 12 * 10 + 1 = 121
num = Math.floor(1 / 10) = 0

Step 4:
Check 0 > 0 is FALSE
Loop stops.

Compare:
original === reverse
121 === 121 is TRUE

Function returns TRUE.

Final Output:
121 is a Palindrome Number
*/
