function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

let word = "hello";

console.log("Original String: " + word);
console.log("Reversed String: " + reverseString(word));

/*
Input: str = "hello"

Step 1:
Create an empty string.
reversed = ""

Step 2:
Find string length.
str.length = 5

Start loop:
i = str.length - 1
i = 5 - 1
i = 4

Step 3:
Check i >= 0
4 >= 0 is TRUE.

str[4] = "o"

reversed = "" + "o"
reversed = "o"

Step 4:
Decrease i by 1.

i = 3

Check i >= 0
3 >= 0 is TRUE.

str[3] = "l"

reversed = "o" + "l"
reversed = "ol"

Step 5:
Decrease i by 1.

i = 2

Check i >= 0
2 >= 0 is TRUE.

str[2] = "l"

reversed = "ol" + "l"
reversed = "oll"

Step 6:
Decrease i by 1.

i = 1

Check i >= 0
1 >= 0 is TRUE.

str[1] = "e"

reversed = "oll" + "e"
reversed = "olle"

Step 7:
Decrease i by 1.

i = 0

Check i >= 0
0 >= 0 is TRUE.

str[0] = "h"

reversed = "olle" + "h"
reversed = "olleh"

Step 8:
Decrease i by 1.

i = -1

Check i >= 0
-1 >= 0 is FALSE.

Loop stops.

Step 9:
Function returns "olleh".

Final Output:

Original String: hello
Reversed String: olleh

*/
