function largenum(a, b, c) {

    let largest = a;

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest;
}

console.log(largenum(10, 20, 15));
console.log(largenum(50, 25, 40));
console.log(largenum(5, 8, 12));