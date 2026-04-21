function memoize(fn) {
    let cache = {};

    return function (arg) {
        if (cache[arg]) {
            console.log("From cache");
            return cache[arg];
        }

        console.log("Calculating...");
        let result = fn(arg);
        cache[arg] = result;

        return result;
    };
}


function square(n) {
    return n * n;
}

const memoSquare = memoize(square);

console.log(memoSquare(5)); 
console.log(memoSquare(5)); 
console.log(memoSquare(6)); 