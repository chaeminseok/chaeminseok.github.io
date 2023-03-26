const body=document.body;
const h2=document.querySelector("h2");
function toResize(){
  const width= window.innerWidth;
  if (width<900){
    body.classList.add("blue");
    h2.innerText="blue";
    body.classList.remove("purple");
    

  }else if(1200>width && width>=900){ 
    body.classList.add("purple");
    h2.innerText="purple";
    body.classList.remove("blue");
    body.classList.remove("green");
    
  }else{
    body.classList.add("green");
    h2.innerText="green";
    body.classList.remove("purple");
  }
}
window.onresize= toResize;