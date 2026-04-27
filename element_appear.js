function c(arr){
    let count={};

    for(let i=0;i<arr.length;i++)
    {
        let item=arr[i];

        if(count[item])
        {
            count[item]++;
        }
        else{
            count[item]=1;
        }
    }
    return count;
}

const num=[1, 2, 3, 2, 4, 1, 5];
console.log(c(num));