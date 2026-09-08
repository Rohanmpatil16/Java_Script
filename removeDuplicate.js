function removeDuplicate(numbers) {
    let uniqueNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }

    return uniqueNumbers;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicate([10, 10, 20, 30, 30, 40]));
console.log(removeDuplicate([1, 1, 1, 2, 2, 3]));