const body=document.body;

function toResize(){
  const width= window.innerWidth;
  if (width<900){
    body.classList.add("blue");
    body.classList.remove("purple");

  }else if(1400>width && width>=900){ 
    body.classList.add("purple");
    body.classList.remove("blue");
    body.classList.remove("black");
    
  }else{
    body.classList.add("black");
    body.classList.remove("purple");
  }
}
window.onresize= toResize;