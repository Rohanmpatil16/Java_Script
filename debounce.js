function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example function (simulating API call)
function fetchData(query) {
    console.log("Fetching data for:", query);
}

// Debounced version
const debouncedFetch = debounce(fetchData, 4000);

// Simulating user typing
debouncedFetch("h");
debouncedFetch("he");
debouncedFetch("hel");
debouncedFetch("hell");
debouncedFetch("hello");

// Only "hello" will be printed after 1 sec