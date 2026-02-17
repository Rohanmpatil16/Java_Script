const cart=[
    {name:"Shirt",price:200},
    {
    name:"Pant",price:300
    }
]

let total=0;

for(let i of cart)
{
    total+=i.price;
}