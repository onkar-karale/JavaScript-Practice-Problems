function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(arr));

/*
Input: [1, 2, 2, 3, 4, 4, 5]

Step 1:
i = 0
arr[i] = 1
1 is not in result
result = [1]

Step 2:
i = 1
arr[i] = 2
2 is not in result
result = [1, 2]

Step 3:
i = 2
arr[i] = 2
2 already exists
Skip it.
result = [1, 2]

Step 4:
i = 3
arr[i] = 3
3 is not in result
result = [1, 2, 3]

Step 5:
i = 4
arr[i] = 4
4 is not in result
result = [1, 2, 3, 4]

Step 6:
i = 5
arr[i] = 4
4 already exists
Skip it.
result = [1, 2, 3, 4]

Step 7:
i = 6
arr[i] = 5
5 is not in result
result = [1, 2, 3, 4, 5]

Step 8:
Loop stops.

Final Output:
[1, 2, 3, 4, 5]
*/
