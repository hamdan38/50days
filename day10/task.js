let num=prompt(
    "enter any number");
if(num>0){
    if(num%2==0)
    {
        alert("postive and even");
    }
    else{
        alert("positive and odd")
    }
}
else if(num<0){
    if(num%2==0){
        alert("negitive and even");
    }
    else{
        alert("negative and odd")
    }
}
else{
    alert("it is zero");
}