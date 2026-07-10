
let a=(x,y)=>x+y;
console.log(a(10,20));

let b=()=>{
    console.log("hello");
}
b();

let c=(a,b)=>{
    console.log("world");
    return a+b;
}
console.log(c(30,40));