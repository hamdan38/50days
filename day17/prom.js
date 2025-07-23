const promise =new Promise((resolve,reject)=>
{
    let sucess=true;
    setTimeout(()=>{
        if(sucess){
            resolve("data fetchess");
        }
        else{
            reject("error while loading");
        }
    },6000)
});
promise.then((result)=>console.log(result))
.catch((error)=>console.log(error));    
// fetch 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    console.log(data[0].title);
})
.catch(err=>console.log(err));