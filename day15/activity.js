let std=[
    {fn:"kavali",ln:"ramu",n:"kavali ramu"}
    // {fn:"Alle",ln:"vinod",n:"alle vinod"},
    // {fn:"minde",ln:"sanjay",n:"minde sanjay"}
];
let first=document.getElementById("fn");
let last=document.getElementById("ln");
let name1=document.getElementById("n");
let fns=std.map(num=>
{
    // first.innerHTML=num.fn;
    // last.innerHTML=num.ln;
    // // name1.innerHTML=num.n;
    // return num.fn,num.ln,num.n;
    //return num.fn.concat(num.ln,num.n);
    //return [...num.fn,...+" "+num.ln,...+"  "+num.n];
    //let a=`FIRST NAME:${num.fn}/nLASTNAME: ${num.ln}`;
    return `FIRST NAME:${num.fn}    LASTNAME: ${num.ln}`;
    //return `FIRST NAME:${num.fn}/nLASTNAME: ${num.ln}`;
  //  return "first name: "+num.fn+"  Last name; "+num.ln;
}
);
console.log(fns);
// let lns=std.map(num=>
// {
//     return num.ln;
// }
// );
// let ns=std.map(num=>
// {
//     return num.n;
// }
// );
first.innerHTML=""+fns+"  ";
// last.innerHTML="LastName :"+lns;
// name1.innerHTML="FullName: "+ns;
let ex=std.map(num=>
{
    let acc=[...num.fn,...num.ln];
    return acc;
});
console.log(" "+ex);
