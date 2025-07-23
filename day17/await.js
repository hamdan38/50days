async function getd() {
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data =await res.json();
        console.log(data[0].title);
    }
    catch(e){
        console.log(e);
    }
    
}

getd();
