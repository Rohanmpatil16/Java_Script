function sumOddNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumOddNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumOddNumbers([10, 15, 20, 25, 30]));
console.log(sumOddNumbers([1, 3, 5, 7]));