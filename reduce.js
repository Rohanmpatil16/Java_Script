function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i);
    }

    return accumulator;
}


const numbers = [1, 2, 3, 4];

const sum = myReduce(numbers, (acc, num) => acc + num, 0);

console.log(sum); 