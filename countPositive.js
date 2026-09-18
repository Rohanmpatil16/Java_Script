function countPositive(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    return count;
}

console.log(countPositive([10, -5, 20, -2, 0, 8]));
console.log(countPositive([-1, -2, 5, 7]));
console.log(countPositive([1, 2, 3, 4, 5]));