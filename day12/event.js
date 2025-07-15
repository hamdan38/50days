let v=document.getElementById("my");
document.getElementById("my").addEventListener("dblclick",

    function(){
        alert("button was double clicked");
    }
);
document.getElementById("m").addEventListener("mouseover",
    function(){
        this.style.backgroundColor="blue";
        this.style.color="white";
        v.style.backgroundColor="pink";
        v,this.style.color="grey";
    }
);
document.getElementById("m").addEventListener("mouseout",
    function(){
        this.style.backgroundColor="grey";
        this.style.color="pink";
    }
);
//document.addEventListener("keydown",
   // function(event){
     //   console.log("key pressed: "+event.key);
        //alert("you pressed : "+event.key);
  //  }
//);
document.getElementById("up").addEventListener("keyup",
    function(event){
        console.log("key released: "+event.key);
    }
);
document.getElementById("inp").addEventListener("input",
    function(){
        console.log("current input: "+this.value);
    }
);
document.getElementById("change").addEventListener("change",function(){
    console.log("option selected is: "+this.value);
    alert("option selected is: "+this.value);

});
let a=document.getElementById("inp");
document.getElementById("submit").addEventListener("submit",function(event)
{
    event.preventDefault();
    alert("form submitted by "+a.value);
});
document.getElementById("m").addEventListener("dblclick",
    function(){
        this.style.color="red";
        this.style.fontFamily="arial";
    }
);
document.getElementById("inpu").addEventListener("focus",
    function(){
        this.style.backgroundColor="orange";
        this.style.color="white";
    }
);
document.getElementById("inpu").addEventListener("blur",
    function(){
        this.style.backgroundColor="red";
        this.style.color="white";
    }
);
