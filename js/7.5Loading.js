const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY ="todos"

let toDos = [];                                            

function saveToDos (){                                      
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   
}                                                              

function deleteToDo(event) {
    const li = event.target.parentElement;  
    li.remove();                             
}                                           

function paintToDo (newTodo) { 
    const li = document.createElement("li"); 
    const span = document.createElement("span");
    span.innerText = newTodo; 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
 
function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);                                    
    paintToDo(newTodo); 
    saveToDos();                                             
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) { //데이터가 있다면!!! 
 const parsedToDos = JSON.parse(savedToDos); //go to (savedToDos)
 toDos = parsedToDos;
 parsedToDos.forEach(paintToDo);
} 


/* 
    Problem 1: we need to take each item from parsedToDos array -> paintToDo
    SOLUTION
    Steps
    step 1. paintTodo already has all the functions we need to paint
    step 2. we just need to puch (paintToDo) var inside 
    *.forEach will simply modify to parse
    step 3. Done! 

    Problem 2: local storage initializes when we put new value(input)
    !reason: it is saved in a const which cannot be modified 
    SOLUTION
    step 1. change const -> let
    step 2. toDos = parsedToDos; -> restore = to (parsedToDos) saved ToDos 
    step 3. everytime when new todos submits (toDos), restore (복원) -> parsedToDos (parse)작업
    step 4. sent to (savedToDos)
    */