/*
A number is called a Perfect Number when the sum of all its divisors, excluding itself, is equal to the original number.

For example:
- 28 → 1 + 2 + 4 + 7 + 14 = 28 → Perfect Number.
- 12 → 1 + 2 + 3 + 4 + 6 = 16 → Not a Perfect Number.
*/

const isPerfectNumber = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum = sum + i;
    }
  }

  if (sum === num) {
    console.log(`${num} is a Perfect Number`);
  } else {
    console.log(`${num} is Not a Perfect Number`);
  }
};

isPerfectNumber(28);
