function countFrequency(numbers) {
    let frequency = new Map();

    for (let num of numbers) {
        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
    }

    return frequency;
}

let result = countFrequency([1, 2, 2, 3, 3, 3, 4, 4]);

console.log(result);
console.log(result.get(3));
console.log(result.get(4));