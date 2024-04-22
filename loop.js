// ALAB 308.3.1: Practical Loops
// Part 1: Fizz Buzzz
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        console.log("Fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }else if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz")
    }else{
        console.log(i)
    }
}

// Part 2: Prime Time
let n = 4;
let primeNum = true;
for (let i =2; i < n; i++){
    if (n % i === 0){
        primeNum = false;
        console.log(n + " is not a prime number")

    }else{
        console.log("Next prime number is " + n)
    }
}

// Part 3: Feeling Loopy

const csvData = `ID,Name,Occupation,Age\n
42,Bruce,Knight,41\n
57,Bob,Fry Cook,19\n
63,Blaine,Quiz Master,58\n
98,Bill,Doctor’s Assistant,26`;

console.log(csvData)