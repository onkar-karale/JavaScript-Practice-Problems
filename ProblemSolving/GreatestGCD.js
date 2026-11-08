// Find the Greatest Common Divisor (GCD)

const findGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

let num1 = 12;
let num2 = 18;

console.log("GCD:", findGCD(num1, num2));

/*
Input:
num1 = 12
num2 = 18

Step 1:
gcd = 1

Step 2: Execute the for loop

i = 1

12 % 1 === 0
18 % 1 === 0

Both conditions are true.

gcd = i
gcd = 1

i = 2

12 % 2 === 0
18 % 2 === 0

Both conditions are true.

gcd = 2

i = 3

12 % 3 === 0
18 % 3 === 0

Both conditions are true.

gcd = 3

i = 4

12 % 4 === 0
18 % 4 === 0

true && false
false

gcd remains 3.

i = 5

12 % 5 === 0
18 % 5 === 0

false && false
false

gcd remains 3.

i = 6

12 % 6 === 0
18 % 6 === 0

Both conditions are true.

gcd = 6

i = 7 to 12

No more common divisors are found.

gcd remains 6.

Step 3:
Return gcd

Final Output:
GCD: 6
*/
