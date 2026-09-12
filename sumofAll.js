function sumofAll(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumofAll([10, 20, 30, 40]));
console.log(sumofAll([5, 10, 15]));
console.log(sumofAll([1, 2, 3, 4, 5]));