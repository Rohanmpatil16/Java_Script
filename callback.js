function fetchData(callback)
{
    setTimeout(()=>{
        const data = "Hello, World!";
        callback(data)
        },1000)
}

function displayData(){
    console.log("Data received and displayed.");
}

fetchData(displayData);