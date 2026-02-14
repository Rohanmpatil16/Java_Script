const a=[1,3,4,1,5,6,3,89];

let max=a[0];
for(let i=0;i<a.length;i++)
{
    if(a[i]>max)
    {
        max=a[i];
    }

}
console.log(max);