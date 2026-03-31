function Safe(str){
    try{
        return{ok:true,data:JSON.parse(str)}
    }
    catch(e){
        return{ok:false,error:e}
    }
}

console.log(Safe('{"name":"trycatch"}'))
console.log(Safe('{"name":"trycatch"'))