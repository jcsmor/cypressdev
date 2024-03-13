var scores = [12, 13, 14, 16]
var evenScores = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
//console.log(evenScores)
//we can not redeclare variable with let, but possible with var, const is constant
// var Global/functional level/ - let Global/Block level - independent inside block and var is not convert string to numb - parseInt()/toString()

let scores1 = [12, 13, 14, 16, 77]
let sumValue = scores1.filter(score => score % 2 == 0)
    .map(score => score * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumValue)

let fruits = ['banana', 'mango', 'pomegrante', 'apple']
fruits.sort() // -> string arrays are easily sorted using sort // fruits.reverse()

function findMaxNumber(arr) { return Math.max(...arr); }
console.log(findMaxNumber(scores1));

let sumOfNumbers = (c, d) => c + d
console.log(sumOfNumbers(4, 6))

function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

// CREATE TABLE Persons (PersonID int,LastName varchar(255),City varchar(255));
// DELETE FROM Persons WHERE PersonID=9535;
// INSERT INTO Persons (PersonID, LastName, FirstName, City)
// VALUES ('1133', 'Erichsen', 'Tom', 'Lisbon');
// DROP TABLE Persons;
// DELETE FROM Persons; -> deletes all records, but table remains