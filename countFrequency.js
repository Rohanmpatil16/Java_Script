function countFrequency(numbers) {
    let frequency = {};

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3, 4]));
console.log(countFrequency([10, 10, 20, 20, 20, 30]));