const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

function paintToDo (newTodo) { 
    const li = document.createElement("li"); 
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo; 
    toDoList.appendChild(li);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo); //에게 (보내다)
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

/* Goal: 화면에 표시하기 위해서 html에 JS 정보 보내기 
1. 새로운 function paintTodo 
2. (변수) 는 입력 정보인 newTodo 
*handleToDoSubmit에 입력 정보 paintToDo에게 보내라고 꼭 하기 ex. paintToDo(newTodo) -> 에게(보내다)
3. 우리가 원하는 위치에 li(list) 변수 만들기 
4. button도 만들거기 때문에 li->span 으로 
5. li -> span appendchild (상속) 지정 
6. span.innerText = newTodo; 즉 사용자 입력 값 
7. 이제 만든 todoList html에 보내기 , toDolist.appendChild(li);
*/