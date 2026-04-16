function c()
{
    let count=0;

    return function(){
        count++;
        return count;
    }
}

const cou=c();
console.log(cou());
console.log(cou());
console.log(cou());
console.log(cou());
