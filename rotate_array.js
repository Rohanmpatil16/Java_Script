function rotateArray(arr) {

    let last = arr.pop();

    arr.unshift(last);

    return arr;
}


console.log(rotateArray([1, 2, 3, 4, 5]));