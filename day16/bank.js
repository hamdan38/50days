function bank(){
    let bal=0;
    return{
        dep:amt=>bal+=amt,
        with:amt=>bal-=amt,
        balance:()=>bal
    }
};
const acc=bank();
document.getElementById("d").addEventListener("click",function(){
    const amt=prompt("enter the deposit amount");
    acc.dep(amt);
    document.getElementById("op").innerHTML=`deposit amount is ${amt}`;
    
});
document.getElementById("w").addEventListener("click",function(){
    const amt=prompt("enter the withdrawl amount");
    acc.with(amt);
    document.getElementById("op").innerHTML=`withdraw amount is ${amt}`;
    
});
document.getElementById("b").addEventListener("click",function(){
    //const amt=prompt("enter the deposit amount");
    bal=acc.balance();
    document.getElementById("op").innerHTML=`current balance is ${bal}`;
    
});