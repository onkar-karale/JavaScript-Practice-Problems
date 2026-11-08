// Count the Number of Words in a String

const countWords = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
      count++;
    }
  }

  return count;
};

let str = "JavaScript is fun to learn";

console.log("Total Words:", countWords(str));

/*
Input: "JavaScript is fun to learn"

Step 1:
count = 0

Step 2: Execute the for loop

i = 0
str[i] = "J"

Condition:
str[i] !== " " && (i === 0 || str[i - 1] === " ")

true && true
true

count = count + 1
count = 0 + 1
count = 1

i = 1 to 9
Characters = "a", "v", "a", "S", "c", "r", "i", "p", "t"

No new word found.
count = 1

i = 10
str[i] = " "

Condition is false.
count = 1

i = 11
str[i] = "i"
Previous character = " "

Condition is true.

count = count + 1
count = 1 + 1
count = 2

i = 12
str[i] = "s"

No new word found.
count = 2

i = 13
str[i] = " "

Condition is false.
count = 2

i = 14
str[i] = "f"
Previous character = " "

Condition is true.

count = count + 1
count = 2 + 1
count = 3

i = 15 to 16
Characters = "u", "n"

No new word found.
count = 3

i = 17
str[i] = " "

Condition is false.
count = 3

i = 18
str[i] = "t"
Previous character = " "

Condition is true.

count = count + 1
count = 3 + 1
count = 4

i = 19
str[i] = "o"

No new word found.
count = 4

i = 20
str[i] = " "

Condition is false.
count = 4

i = 21
str[i] = "l"
Previous character = " "

Condition is true.

count = count + 1
count = 4 + 1
count = 5

i = 22 to 24
Characters = "e", "a", "r", "n"

No new word found.
count = 5

Step 3:
Return count

Final Output:
Total Words: 5
*/
