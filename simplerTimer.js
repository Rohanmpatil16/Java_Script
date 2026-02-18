let sec=0;
const timer=setInterval(()=>{
    console.log(sec++);

    if(sec>10)
        clearInterval(timer);
},1000)