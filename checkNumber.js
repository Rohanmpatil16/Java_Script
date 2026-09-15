function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } 
    else if (number < 0) {
        return "Negative";
    } 
    else {
        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
console.log(checkNumber(25));