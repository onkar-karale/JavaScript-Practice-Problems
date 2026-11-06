/* 
Consonants are all the letters in the English alphabet except the vowels.

There are 5 vowels:
a, e, i, o, u

The remaining 21 letters are consonants.
*/

function countVowelsConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (char >= "a" && char <= "z") {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  console.log("Vowels:", vowels);
  console.log("Consonants:", consonants);
}

let str = "hello";

countVowelsConsonants(str);

/*
Input: str = "hello"

Step 1:
vowels = 0
consonants = 0

Step 2:
i = 0
char = 'h'
'h' is not a vowel.
consonants = 1

Step 3:
i = 1
char = 'e'
'e' is a vowel.
vowels = 1

Step 4:
i = 2
char = 'l'
'l' is not a vowel.
consonants = 2

Step 5:
i = 3
char = 'l'
'l' is not a vowel.
consonants = 3

Step 6:
i = 4
char = 'o'
'o' is a vowel.
vowels = 2

Step 7:
Loop stops.

Final Output:
Vowels: 2
Consonants: 3
*/
