function findCommonElement(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }

  return false;
}

let array1 = ["a", "b", "c", "d"];
let array2 = ["k", "x", "c"];

console.log(findCommonElement(array1, array2));

/*
Input:
array1 = ['a', 'b', 'c', 'd']
array2 = ['k', 'x', 'c']

Step 1:
i = 0
array1[i] = 'a'

Compare with array2:
'a' === 'k' → FALSE
'a' === 'x' → FALSE
'a' === 'c' → FALSE

Step 2:
i = 1
array1[i] = 'b'

Compare with array2:
'b' === 'k' → FALSE
'b' === 'x' → FALSE
'b' === 'c' → FALSE

Step 3:
i = 2
array1[i] = 'c'

Compare with array2:
'c' === 'k' → FALSE
'c' === 'x' → FALSE
'c' === 'c' → TRUE

Common element found.
Function returns TRUE.

Final Output:
true
*/
