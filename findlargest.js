function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log(findLargest([10, 25, 7, 45, 18]));
console.log(findLargest([5, 2, 9, 1, 20]));
console.log(findLargest([-10, -5, -20, -2]));