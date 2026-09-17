function reverseArray(numbers) {
    let reversed = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([10, 20, 30]));
console.log(reverseArray([5, 8, 2, 9]));