function countCharacters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
}

let str = "hello";

console.log("Total characters in the string:", countCharacters(str));

/*
Input: str = "hello"

Step 1:
count = 0

Step 2:
i = 0
str[0] = 'h'
count = 1

Step 3:
i = 1
str[1] = 'e'
count = 2

Step 4:
i = 2
str[2] = 'l'
count = 3

Step 5:
i = 3
str[3] = 'l'
count = 4

Step 6:
i = 4
str[4] = 'o'
count = 5

Step 7:
i = 5
Check i < str.length
5 < 5 is FALSE
Loop stops.

Function returns 5.

Final Output:
Total characters: 5
*/
