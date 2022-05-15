const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

/* 
Step 1 html에서 뼈대 생성
1. html에서 새로운 form 만들기 
2. Form id 생성 
3. input function 생성 ex <input type = "text" placeholder="Write ..." , required(필수) />
- form 안에 있는 input은 html verify 기능을 default로 설정해 놓는다 
*placeholder: 텍스트 필드 내에 있는 짧은 도움말 
4. <ul></ul> 만들기 , id="todo-list" 
- ToDo를 넣을 공간 만들어 놓기 

Step 2 JS에 html todoinfo 가지고 오기 
1. 항상 처음엔 변수 생성! const toDoForm, const toDoInput, const toDoList 
2. 하지만, 문제는 현재 우리의 정보가 저장이 안되고, html default로 refresh 된다 
3. function handleToDoSubmit 만들기 
4. 그러기 위해 "submit" 이벤트를 들어야 한다 
5. toDoForm.addEventListener 추가 
6. 변수 자리 주기 ex. (event)
7. 이제 submit 누르면 .preventDefault (기본설정 무력화) 
8. 입력 value(값)을 저장 할수 있는 변수 newTodo 만들기 
9. 마지막으로 입력 후 --> 저장 --> "" empty
*/