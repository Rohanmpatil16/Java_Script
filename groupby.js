function groupBy(arr, key) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i][key];

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(arr[i]);
    }

    return result;
}


const users = [
    { name: "Rohan", age: 20 },
    { name: "Amit", age: 21 },
    { name: "Rahul", age: 20 }
];

console.log(groupBy(users, "age"));