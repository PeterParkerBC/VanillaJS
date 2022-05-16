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
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos();                                                           //li 의 typeof를 보니 숫자(string)이었다
}                                                                          // parseInt (string -> number)

function paintToDo (newTodo) { 
    const li = document.createElement("li"); 
    li.id = newTodo.id;                                      
    const span = document.createElement("span");             
    span.innerText = newTodo.text;                           
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
    const newToDoObj = {                                      
        text:newTodo,                                         
        id: Date.now()                                        
    };                                                        
    toDos.push(newToDoObj);                                
    paintToDo(newToDoObj);                                    
    saveToDos();                                             
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) { 
 const parsedToDos = JSON.parse(savedToDos);
 toDos = parsedToDos;
 parsedToDos.forEach(paintToDo);
} 


    /* 
    7.8 
    Goal: add .filter function to our todolist 
    - const arr = [1, 2, 3, 4]
    - arr.filter = item"var" => item > 2) / result: [3, 4]
    - const newArr = arr.filter = item => item > 2)
    - arr [1, 2, 3, 4]
    - newArr = [3, 4] 
    .filter doesn't modify the previous arr


    7.7
    Goal: understand .filter function 
    .filter is very similar to .forEach function 
    it allows every element to be filtered  
    .filter function gives you 'new array' (after filtering)

    ex) 
    function sexyFilter (item) {
    return(되돌려 달라) (조건) item !== 3}; 
    result = (4) [1, 2, 4, 5] = excluded 3 

    sexyflter (1) true
    sexyflter (2) true
    sexyflter (3) false
    sexyflter (4) true
    sexyflter (5) true

    = true if item dont have 3 (3제외하고 다) 
    */ 
