function groupBy(arr, key) {   
const grouped = {};   
for 
(const obj of arr) {     
k = obj[key];  
const 
if (!grouped[k]) grouped[k] = [];  
grouped[k].push(obj);  
}  
return grouped;  
}  
const products = [  
{ name: "Apple", category: "Fruit" },   
{ name: "Carrot", category: "Veg" },  
{ name: "Banana", category: "Fruit" },  
];  
console.log(groupBy(products, "category"));