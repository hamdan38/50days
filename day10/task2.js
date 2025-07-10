let name=prompt("enter your name");
var age=Number(prompt(name+" enter your age"));
switch(true){
    case (age<18):{
        alert("not eligible for vote");
        break;
    }
    case (age>18):
        {
            alert("eligible for voting");
            break;
        }
    case (age>65):{
        alert("cenior citizen");
        break;
    }
    default:{
        alert("enter correct value");
    }
}