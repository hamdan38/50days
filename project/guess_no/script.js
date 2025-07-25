let num=Math.round(Math.random()*100);

function fun(){
    let inp=document.getElementById("inp").value;
    if(inp>num){
        document.getElementById("disp").textContent="your number is high";
    }
    else if(inp<num){
        document.getElementById("disp").textContent="your number is low";
    }
    else{
        document.getElementById("disp").textContent="you gussed correctly";
    }
    
};
console.log(num);
