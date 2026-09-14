function findAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;

    return average;
}

console.log(findAverage([10, 20, 30, 40]));
console.log(findAverage([5, 10, 15]));
console.log(findAverage([80, 90, 70]));