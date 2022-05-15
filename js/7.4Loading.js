const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY ="todos"

const toDos = [];                                            

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
if (savedToDos !== null) {
 const parsedToDos = JSON.parse(savedToDos);
 parsedToDos.forEach((item) => console.log("this is the turn of", item)); 
} 



/* Goal : get savetodo and make it 'saved' for next time 
1. after submit (addeventlistener)
2. get those todos from saveToDos(localStorage) -> make into a Pharsed 
3. but sometimes it can be 'null' 
4. if it is 'not'!=='equal' to null change savedtoDos into parsedToDos
*array.forEach parsed(파싱) item (object) we are going give a function
*function {} replaced to => : new version
 ex. (var) =>(arrow function) console.log("text", var); 

TIP (change) a text -> string -> object
1. text -> string : JSON.stringify() 
2. string -> object : JSON.parse() 
*/ 
