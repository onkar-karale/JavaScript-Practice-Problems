function repeatingCharacters(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  for (let char in frequency) {
    if (frequency[char] > 1) {
      console.log(char + ": " + frequency[char] + " times");
    }
  }
}

let str = "hello";

repeatingCharacters(str);

/*
Input: str = "hello"

Step 1:
char = 'h'
frequency = { h: 1 }

Step 2:
char = 'e'
frequency = { h: 1, e: 1 }

Step 3:
char = 'l'
frequency = { h: 1, e: 1, l: 1 }

Step 4:
char = 'l'
'l' already exists
frequency['l'] = 1 + 1 = 2

frequency = { h: 1, e: 1, l: 2 }

Step 5:
char = 'o'
frequency = { h: 1, e: 1, l: 2, o: 1 }

Step 6:
Check each character's frequency.

h = 1 → Not printed
e = 1 → Not printed
l = 2 → Printed
o = 1 → Not printed

Final Output:
l: 2 times
*/
