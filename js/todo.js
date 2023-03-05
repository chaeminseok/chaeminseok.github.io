 const toDoForm=document.querySelector("#todo-form");
 const toDoInput=document.querySelector("#todo-form input") ;
 const toDoList=document.querySelector("#todo-list") ;
 let toDos=[];
 const TODOS_KEY="todos";
function saveToDo(){

    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}

function paintToDo(newToDo){
    const li =document.createElement("li");
    li.id =newToDo.id;
    const span =document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    span.innerText= "🔥"+newToDo.text;
    button.innerText="✔️";
    button.addEventListener("click", deleteToDo)
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj ={
        text:newToDo,
        id:Date.now(),  
    }; 
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const saveToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos !==null){
    const parseToDos=JSON.parse(saveToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}
  