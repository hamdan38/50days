let items=[
    {name:"laptop",price:400,category:"electronics",stock:10},
    {name:"tv",price:50,category:"electronics",stock:1},
    {name:"tata",price:1200,category:"car",stock:4},
    {name:"phone",price:200,category:"electronics",stock:3},
    {name:"jacket5",price:99,category:"chothing",stock:2}

];
let filt=items.filter(num=>num.stock>0&&num.category=="electronics").map(num=>{
    return {...num,items}
   // return {...num,productName:`${num.name}`};
    

});
console.log(filt);

let pri=filt.reduce((acc,num)=>acc+num.price,0);
let print=filt.map(num=>{
    return {...num,productname:`${num.name}`};
});
let fil=items.filter(num=>num.stock>0&&num.category=="electronics").map(num=>{
    //return {...num,items}
    return {productName:`${num.name}`,displayprice:`${num.price}`};
});
console.log(fil);
console.log("total cost:$"+pri);