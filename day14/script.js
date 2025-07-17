let person=[
    {id:100,nam:"ramu",age:20},{id:101,nam:"hamdan",age:21}
];
let v=document.getElementById("ha");
let name1=person.map(num=>{
    console.log(num.nam);
    //v.append(innerHTML="   "+num.nam);
    return num.nam;
});
console.log(name1);
v.innerHTML=name1;