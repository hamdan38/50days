let func=()=>{
    const a=document.getElementById("h");
    a.style.color="green";
    a.style.fontFamily="Arial";
    const b=document.getElementsByClassName("para");
    for(let i=0;i<b.length;i++){
        b[i].style.color="red";
        b[i].style.textAlign="center";
    }
    const c=document.getElementsByTagName("p");
    c[3].style.color="pink";
    document.body.style.backgroundColor="grey";
}