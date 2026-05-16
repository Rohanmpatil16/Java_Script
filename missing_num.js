function findMissingNumber(arr, n) {

    let total = (n * (n + 1)) / 2;

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return total - sum;
}

// Example
console.log(findMissingNumber([1, 2, 3, 5], 5));