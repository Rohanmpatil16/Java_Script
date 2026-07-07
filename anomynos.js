 function a(){
    console.log("hello");
 }

 console.log("hi");
 setTimeout(a, 2000);
 a();
 console.log("bye");

 setTimeout(function(){
    console.log("function");
 },3000);