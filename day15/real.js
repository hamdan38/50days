const std=[ {fn:"kavali",ln:"ramu"},
    {fn:"Alle",ln:"vinod"},
    {fn:"minde",ln:"sanjay"}
];
let person=std.map(num=>{

    return {...num,FullName:`${num.fn} ${num.ln}`};

});
console.log(std);
console.log("people with full name",person);