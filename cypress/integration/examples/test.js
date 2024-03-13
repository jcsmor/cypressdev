var scores = [12, 13, 14, 16]
var evenScores = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}

console.log(evenScores)

let scores1 = [12, 13, 14, 16]

let sumValue = scores1.filter(score => score % 2 == 0)
    .map(score => score * 3)
    .reduce((sum, val) => sum + val, 0)

console.log(sumValue)

function findMaxNumber(arr) {
    return Math.max(arr);
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

function findLargestElement(nestedArray) {
    let largest = nestedArray[0][0];
    for (let arr of nestedArray) {
        for (let num of arr) {
            if (num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

function fibonacciSequence(numTerms) {
    if (numTerms <= 0) return [];
    if (numTerms === 1) return [0];
    let sequence = [0, 1];
    while (sequence.length < numTerms) {
        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}

function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}