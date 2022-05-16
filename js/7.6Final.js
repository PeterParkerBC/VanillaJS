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
    console.log(li.id);                                         //5. 'before' we remove, detact li.id
    li.remove();                             
}                                           

function paintToDo (newTodo) { 
    const li = document.createElement("li"); 
    li.id = newTodo.id;                                         //4. giving li id = (equals) to newToDo.id
    const span = document.createElement("span");                // ex. <li id="1652685290338"></li>
    span.innerText = newTodo.text;                              //3. .text -> object to text  
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
    const newToDoObj = {                                        //1. newToDoObj -> contains 'id' with the 'value(text)'
        text:newTodo,                                           // step 1: text value : newTodo
        id: Date.now()                                          //step 2: give ID's that conatin 'Date.now()' -> (mm second ID)
    };                                                          // "work as a random ID" -> ex. {text: "a", id: 1652684632617}
    toDos.push(newToDoObj);                                
    paintToDo(newToDoObj);                                      //2. paintToDo 에게 newToDoObj를 대신 추가 
    saveToDos();                                             
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) { 
 const parsedToDos = JSON.parse(savedToDos); //go to (savedToDos)
 toDos = parsedToDos;
 parsedToDos.forEach(paintToDo);
} 


    /* 
    Goal: give an ID to every object in our DB [array] / in our case the DB is not localStorage, its an array 'toDos'
    Steps
    1. newToDoObj -> contains id with the value(text)
    2. use the ID 
    3. [Object Object] in html, I want to see the actual 'text' -> .text -> object to text  
    4. what is the ID for? -> to Identify each 'li' item with an ID
    5. to 'detact' ID the user wants to 'delete'

    Solution: giving DB a ID

    Next: we have to detact when we want to delete an object [in the array] by ID

    confusion
    1.  !== if there is !not! 
    47: if the savedToDos is 'not' null 
    if (savedToDos !== null)  
    - (만약 savedToDos null이 아니면) true
    - '데이터가 있다면' 
    - !== (비교연산자) is not , 비교연산자 공부 필요!
    - ex) if (a !== a) -> true 
    - 이 말은 a 제외한 모든 것은 true 란 뜻

    keynote
    - how to create an random ID (ID's that conatin Date.now() mm second ID)
    - toDos array is our DB
    - LocalStorage is the place where it saves our DB [array] 
    */ 
