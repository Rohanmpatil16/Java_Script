function smallestElement(numbers) {
    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;
}

console.log(smallestElement([10, 5, 8, 2, 15]));
console.log(smallestElement([20, 7, 12, 3, 9]));
console.log(smallestElement([4, 8, 1, 6, 2]));