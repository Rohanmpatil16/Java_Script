function myFilter(arr,callback)
{
    let result=[]

    for(let i=0;i<arr.length;i++)
    {
        if(callback(arr[i],i))
        {
        result.push(arr[i]);
        }
    }
    return result;
}

const num=[1,2,3,4,5];

const even=myFilter(num,(x)=>x%2===0);
console.log(even);