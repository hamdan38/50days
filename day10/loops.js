
var i;
for(i=0;i<21;i++){
    if(i%2==0)
        console.log(i);
}
let j;
var k=0;
for(j=0;j<=100;j++)
{
    k+=j;
}
alert("sum of 100 numbers is:"+k);
let a=Number(prompt("enter the table you want"));
for(let i=1;i<11;i++){
    console.log(a+"*"+i+"="+i*a);
}
console.log("WHILE LOOP");
i=1;
let b=Number(prompt("enter any numner"));
while(i<11){
    console.log(b+"*"+i+"="+i*b);
    /*alert(b+"*"+i+"="+i*b);*/


    i++;
}