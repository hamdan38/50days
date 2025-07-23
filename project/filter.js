let items=[
    {name:"laptop",price:400,category:"electronics"},
    {name:"tv",price:50,category:"electronics"},
    {name:"tata",price:1200,category:"car"},
    {name:"phone",price:200,category:"electronics"},
    {name:"jacket5",price:99,category:"chothing"}

];
let filt=items.filter(num=>num.price>100&&num.category=="electronics");
console.log(items);
console.log(filt);
let x=filt.map(num=>{
    return `${num.name} (price :${num.price} category: ${num.category})`;
});
console.log(x);