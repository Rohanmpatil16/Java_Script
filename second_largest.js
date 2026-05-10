function sec_lar(arr){
    let lar=-Infinity;
    let sec=-Infinity;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>lar)
        {
            sec=lar;
            lar=arr[i];
        }
    }
    return sec;
}

console.log(sec_lar([1, 2, 3, 4, 5, 6]));