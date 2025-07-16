let c=0;
let v=document.getElementById("num");
c=Number(c);
v=Number(v);
document.getElementById("m").addEventListener("click",
    function(){
        c=c-1;
    document.getElementById("num").innerHTML=c;
        console.log(c);
    }
);
document.getElementById("p").addEventListener("click",
    function(event){
        c=c+1;
      document.getElementById("num").innerHTML=c;
        console.log(c);
    }
);o