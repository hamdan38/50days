let arr=["apple","bananan","carrot"];
const [a,b,c]=arr;
console.log(a);
//map()
let n=[1,2,3,4];
let add=n.map(num=>num+2);
console.log(add);
console.log(n);
//filter()
let n1=[1,2,3,4];
let even=n1.filter(num=>num%2==0);
console.log(even);
//reduce()
let sum=n.reduce((a,num)=>a+num,1);
console.log(sum);
console.log("😒👍");
//araayofaray by reduce
let aoa=[[1,2],[3,4],[5,6]];
console.log(aoa);
// let [d,e,f]=aoa;
let ad=aoa.reduce((acc,num)=>{
    return [...acc,...num];
});
console.log(ad);