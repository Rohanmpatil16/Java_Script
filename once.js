function once(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}


function greet(name) {
    console.log("Hello", name);
}

const greetOnce = once(greet);

greetOnce("Rohan"); 
greetOnce("Patil"); 
greetOnce("JS");    