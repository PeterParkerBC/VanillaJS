const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

const toDos = [];                                           //1. construt an array(배열) 

function saveToDos (){                                      //5. JSON.stringify() lets me save words -> string 문자열 (object) JSO(object)Notation
    localStorage.setItem("toDos", JSON.stringify(toDos));   //3. 1) localStorage.setItem (생성)
}                                                           //   2) (""이름, value) - *function -> localStorage

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
    toDos.push(newTodo);                                     //2. .push newTodo in to toDos array [배열]
    paintToDo(newTodo); 
    saveToDos();                                             //4. Saving todos
}
toDoForm.addEventListener("submit", handleToDoSubmit); 


//localStorage doesn't allow to save array's
//localStorage can only save text 
//object or array -> string  : JSON.stringify() 

/* 정리 goal: to save todo list on a localStorage
1.  const toDos = []; -> construt an array(배열) 
2.  toDos.push(newTodo); -> push newTodo(입력값) in to toDos array [배열] 
3.  function saveToDos (){localStorage.setItem("toDos", JSON.stringify(toDos));} -> we make a function (to make localStorage).setItem("key", value) 
4.  saveToDos();   -> saving todos when submit
5.  JSON.stringify() ->  lets me save 'words' into 'string 문자열' = (JSON) object
*/ 