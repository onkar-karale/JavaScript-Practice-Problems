let myArr = [10, 20, 70, 40, 50, 28, 27, -35];

// case 1: How to print array elements

for (let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
}

// case 2: Printing the sum of array elements

let sum = 0;

for(let i = 0; i<myArr.length; i++){
   sum = sum + myArr[i];
}

console.log(sum);

// case 3: write the code to print just a positive numbers

for(let i=0; i<myArr.length; i++){
    if(myArr[i]>0){
        console.log(myArr[i])
    }
}

// case 4: find the avg of the integer array

let res = 0;

for(let i=0; i<myArr.length; i++){
    res += myArr[i];
}

let avg = res/myArr.length;
console.log(`avg of array elemnets ${avg}`)


// case 5: print the largest number of array;

let largest = myArr[0]

for(let i=1; i<myArr.length; i++){
   if(myArr[i] > largest){
     largest = myArr[i]
   }
}

console.log(largest)


// case 6: print the second largest
let large = myArr[0]
let secLarge = myArr[0];

for(let i=1; i<myArr.length; i++){
    if(myArr.length < 2) {
        console.log("Array lengths can't be less than two")
    }
    else if(myArr[i] > large){
        secLarge = large;
        large = myArr[i];
    } else if(myArr[i] > secLarge){
        secLarge = myArr[i]
    }
}

if (large === secLarge) {
    console.log("Can't determine the 2nd largest because all elements are equal")
} else {
    console.log(`secondLargest element is ${secLarge}`)
}