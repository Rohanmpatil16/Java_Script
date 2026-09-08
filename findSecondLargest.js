function findSecondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } 
        else if (numbers[i] > secondLargest && numbers[i] !== largest) {
            secondLargest = numbers[i];
        }
    }

    return secondLargest;
}

console.log(findSecondLargest([10, 25, 7, 45, 18]));
console.log(findSecondLargest([5, 2, 9, 1, 20]));
console.log(findSecondLargest([100, 50, 80, 30]));