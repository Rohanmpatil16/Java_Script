function fakeApi(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve("Data fetched successfully");   
            }
            else{
                reject("Error fetching data");
            }
        },2000)
        })
    }
    
fakeApi()
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.error(error);
});