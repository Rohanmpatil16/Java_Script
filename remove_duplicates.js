function u(arr){
    const res=[]
    for(const item of arr)
    {
        if(!res.includes(item))
        {
            res.push(item)
        }
    }
    return res;
}
console.log(u([1,2,3,2,4,1,5]))