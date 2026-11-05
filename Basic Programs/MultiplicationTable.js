function Table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i} `);
  }
}

let n = 5;

Table(n);

console.log("---------------------------------------------------------");

// Recursive Approach:

function printTable(num, i = 1) {
  if (i == 11)
    // base case
    return;
  console.log(num + " * " + i + " = " + num * i);
  i++;
  printTable(num, i);
}

let num = 10;
printTable(num);
