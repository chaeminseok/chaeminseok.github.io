const maxInput=document.querySelector("h2 input");
const guessInput=document.querySelector("p input");
const playButton=document.querySelector("input[type=submit]");
const form=document.querySelector("form");
const resultForm=document.querySelector(".hidden");

const chooseText= document.querySelector(".choose");
const resultText= document.querySelector(".result");

function onsubmit(event){
  
    event.preventDefault();
    resultForm.classList.remove("hidden");
    let randomValue= Math.floor(Math.random()*(parseInt(maxInput.value)+1));
    chooseText.innerText=`You chose: ${guessInput.value} machine chose: ${randomValue}`
    if (randomValue===parseInt(guessInput.value)){
        resultText.innerText="You win the game";
    }else{
        resultText.innerText="You lose the game";
    }
 



}
form.addEventListener("submit", onsubmit);