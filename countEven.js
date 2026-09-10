function countEvenNumbers(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEvenNumbers([10, 15, 20, 25, 30]));