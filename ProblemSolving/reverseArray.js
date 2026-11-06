function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}  

let arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr));

/*
Input: [1, 2, 3, 4, 5]

Step 1:
reversed = []

i = 4
arr[4] = 5
reversed = [5]

Step 2:
i = 3
arr[3] = 4
reversed = [5, 4]

Step 3:
i = 2
arr[2] = 3
reversed = [5, 4, 3]

Step 4:
i = 1
arr[1] = 2
reversed = [5, 4, 3, 2]

Step 5:
i = 0
arr[0] = 1
reversed = [5, 4, 3, 2, 1]

Step 6:
i = -1
Check i >= 0
-1 >= 0 is FALSE
Loop stops.

Function returns [5, 4, 3, 2, 1].

Final Output:
[5, 4, 3, 2, 1]
*/
