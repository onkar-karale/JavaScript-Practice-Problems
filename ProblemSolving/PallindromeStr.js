function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

let str = "level";

if (isPalindrome(str)) {
  console.log(str + " is a Palindrome");
} else {
  console.log(str + " is Not a Palindrome");
}

/*
Input: str = "madam"

Step 1:
reversed = ""

i = 4
str[4] = 'm'
reversed = "m"

Step 2:
i = 3
str[3] = 'a'
reversed = "ma"

Step 3:
i = 2
str[2] = 'd'
reversed = "mad"

Step 4:
i = 1
str[1] = 'a'
reversed = "mada"

Step 5:
i = 0
str[0] = 'm'
reversed = "madam"

Step 6:
Loop stops.

Step 7:
Compare original and reversed strings.

str === reversed

"madam" === "madam"

Condition is TRUE.

Function returns TRUE.

Final Output:
madam is a Palindrome
*/
