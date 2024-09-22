 const getActivity= async ()=>{
    try{
        const res=await fetch("https://bored-api.appbrewery.com/random",{
            mode: 'no-cors'
        });
        const data= await res.json();
        const myActivity=document.querySelector("#my-activity");
        myActivity.innerHTML=data.activity;

    }catch(error){
    }
 };
 window.addEventListener("load",()=>{
    getActivity();
 });