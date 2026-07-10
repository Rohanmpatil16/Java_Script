
let a=(first,second,...rest)=>{
    console.log(first,second,...rest);
}

a(1,2,3,4,5,6,7,8,9,10);

let p={
    name:"John",
    age:30,
    city:"New York"
}

const {...rest}=p;
console.log(rest);