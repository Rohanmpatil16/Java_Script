function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumEvenNumbers([10, 15, 20, 25, 30]));
console.log(sumEvenNumbers([2, 4, 6, 8]));