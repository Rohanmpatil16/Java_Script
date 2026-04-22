function deepClone(obj)
{
    return JSON.parse(JSON.stringify(obj))
}

let obj1={
    name:"John",
    age:30,
    hobbies:["reading","gaming"],
}

let obj2=deepClone(obj1)
obj2.name="Jane"
console.log(obj1.name) // John
console.log(obj2.name) // Jane