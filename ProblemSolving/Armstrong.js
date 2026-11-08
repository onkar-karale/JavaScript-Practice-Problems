const isArmstrong = (num) => {
  let originalNum = num;
  let temp = num;
  let digits = String(num).length;
  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;

    sum = sum + digit ** digits;

    temp = Math.floor(temp / 10);
  }

  if (sum === originalNum) {
    console.log(`${originalNum} is an Armstrong Number`);
  } else {
    console.log(`${originalNum} is Not an Armstrong Number`);
  }
};

isArmstrong(153);

/*
Input: 153

Step 1:
originalNum = num
originalNum = 153

Step 2:
temp = num
temp = 153

Step 3:
digits = String(num).length
digits = String(153).length
digits = 3

Step 4:
sum = 0

Step 5: Execute the while loop

Iteration 1:

temp = 153

digit = temp % 10
digit = 153 % 10
digit = 3

sum = sum + digit ** digits
sum = 0 + 3 ** 3
sum = 0 + 27
sum = 27

temp = Math.floor(temp / 10)
temp = Math.floor(153 / 10)
temp = 15

Iteration 2:

temp = 15

digit = temp % 10
digit = 15 % 10
digit = 5

sum = sum + digit ** digits
sum = 27 + 5 ** 3
sum = 27 + 125
sum = 152

temp = Math.floor(temp / 10)
temp = Math.floor(15 / 10)
temp = 1

Iteration 3:

temp = 1

digit = temp % 10
digit = 1 % 10
digit = 1

sum = sum + digit ** digits
sum = 152 + 1 ** 3
sum = 152 + 1
sum = 153

temp = Math.floor(temp / 10)
temp = Math.floor(1 / 10)
temp = 0

Step 6: Check the condition

sum === originalNum
153 === 153
true

Final Output:
153 is an Armstrong Number
*/
