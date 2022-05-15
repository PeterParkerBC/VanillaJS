const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

function deleteToDo(event) {
    const li = event.target.parentElement;  //1. getting info from (event) 
    li.remove();                            //2. .target gives us the element that was clicked    
}                                           //3. .parenetElement (who we have to delete), -li-

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
    paintToDo(newTodo); 
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

/*  Goal 1: Set-up a delete button
1. const로 버튼 변수와 버튼 만들기 
3. 버튼 innerText 변경 
4. JS -> Html로 <li>에 appendChild 즉 html에 버튼 보내기 (button)
5. addEventListener 버튼에 추가 "click" 
6. deletToDo function만들기 
7. 버튼을 작동하기 위해 (변수) 만들기 - 그래야 event로 부터 info를 받는다 

    Goal 2: How to find the event target and parentElement 
문제: Delete 버튼은 만들었지만 지워지지 않는다 
1. Event info를 이용해서 .target 과 .parentElement 찾기 
how 1? console.dir(event) and Find the path 0: me, 1:parent 
how 2? cosole.dir(event.target) -> target gives us the element that was clicked (parentElement)
2. now, we have to delete (remove) <li> when delete button is clicked. 
ex) const li = event.target.parentElement;
    li.remove();   
*/
