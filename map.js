function myMap(arr,callback)
{
    let result=[];

    for(let i=0;i<arr.length;i++)
    {
        result.push(callback(arr[i],i))
    }
    return result;
}

const num=[1,2,3,4,5];
const square=myMap(num,(x)=>x*x);
console.log(square);