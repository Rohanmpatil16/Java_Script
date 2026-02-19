const input=prompt("Enter a string to reverse:");

let reverse=" "

for(let i=input.length()-1;i>=0;i--)
{
    reverse+=input[i];
}
console.log(reverse);