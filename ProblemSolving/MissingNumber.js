function findMissingNumber(arr) {
  let n = arr.length + 1;

  let totalSum = (n * (n + 1)) / 2;

  let sumOfArray = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfArray = sumOfArray + arr[i];
  }

  let missingNumber = totalSum - sumOfArray;

  return missingNumber;
}

let arr = [1, 2, 5, 4, 6, 8, 7];

console.log("Missing Number:", findMissingNumber(arr));

/*
Input: [1, 2, 5, 4, 6, 8, 7]

Step 1:
n = arr.length + 1
n = 7 + 1 = 8

Step 2:
totalSum = (n * (n + 1)) / 2
totalSum = (8 * 9) / 2
totalSum = 36

Step 3:
sumOfArray = 0

i = 0
sumOfArray = 0 + 1 = 1

i = 1
sumOfArray = 1 + 2 = 3

i = 2
sumOfArray = 3 + 5 = 8

i = 3
sumOfArray = 8 + 4 = 12

i = 4
sumOfArray = 12 + 6 = 18

i = 5
sumOfArray = 18 + 8 = 26

i = 6
sumOfArray = 26 + 7 = 33

Step 4:
missingNumber = totalSum - sumOfArray
missingNumber = 36 - 33
missingNumber = 3

Final Output:
Missing Number: 3
*/
