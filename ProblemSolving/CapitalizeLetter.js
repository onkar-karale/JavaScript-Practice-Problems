// Capitalize the First Letter of Every Word

const capitalizeWords = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }

  return result;
};

let str = "javascript is easy to learn";

console.log("Capitalized String:", capitalizeWords(str));

/*
Input: "javascript is easy to learn"

Step 1:
result = ""

Step 2: Execute the for loop

i = 0
str[i] = "j"

Condition:
i === 0 || str[i - 1] === " "

true || false
true

result = result + str[i].toUpperCase()
result = "" + "J"
result = "J"

i = 1
str[i] = "a"

Condition is false.

result = result + str[i]
result = "J" + "a"
result = "Ja"

i = 2
str[i] = "v"

result = "Ja" + "v"
result = "Jav"

i = 3
str[i] = "a"

result = "Jav" + "a"
result = "Java"

i = 4
str[i] = "s"

result = "Java" + "s"
result = "Javas"

i = 5
str[i] = "c"

result = "Javas" + "c"
result = "Javasc"

i = 6
str[i] = "r"

result = "Javasc" + "r"
result = "Javascr"

i = 7
str[i] = "i"

result = "Javascr" + "i"
result = "Javascri"

i = 8
str[i] = "p"

result = "Javascri" + "p"
result = "Javascript"

i = 9
str[i] = "t"

result = "Javascript" + "t"
result = "Javascript"

i = 10
str[i] = " "

result = "Javascript" + " "
result = "Javascript "

i = 11
str[i] = "i"
Previous character = " "

Condition is true.

result = "Javascript " + "I"
result = "Javascript I"

i = 12
str[i] = "s"

result = "Javascript I" + "s"
result = "Javascript Is"

i = 13
str[i] = " "

result = "Javascript Is" + " "
result = "Javascript Is "

i = 14
str[i] = "e"
Previous character = " "

result = "Javascript Is " + "E"
result = "Javascript Is E"

i = 15 to 16
Characters = "a", "s"

result = "Javascript Is Eas"

i = 17
str[i] = "y"

result = "Javascript Is Eas" + "y"
result = "Javascript Is Easy"

i = 18
str[i] = " "

result = "Javascript Is Easy "

i = 19
str[i] = "t"
Previous character = " "

result = "Javascript Is Easy T"

i = 20
str[i] = "o"

result = "Javascript Is Easy To"

i = 21
str[i] = " "

result = "Javascript Is Easy To "

i = 22
str[i] = "l"
Previous character = " "

result = "Javascript Is Easy To L"

i = 23 to 25
Characters = "e", "a", "r"

result = "Javascript Is Easy To Lear"

i = 26
str[i] = "n"

result = "Javascript Is Easy To Learn"

Step 3:
Return result

Final Output:
Capitalized String: Javascript Is Easy To Learn
*/
