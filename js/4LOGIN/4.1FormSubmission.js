/*
const loginForm = document.getElementById("login-form");        
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); 


1. Html에서 입력한 내용 JS에 가져오기 
2. 코드 더 짧게 만들고 싶다면 
*/ 

const loginInput = document.querySelector("#login-form input"); 
const loginButton = document.querySelector("#login-form button"); 

//이제 버튼 클릭을 감지해야함 
//Why? 그래야 클릭 할때마다 우리가 그 정보를 저장할수 있음 

function onClickButton() {
const username = loginInput.value; 
if (username === "") {
    alert("Please write your name");
} else if (username.length > 15) {
    alert("Your name is too long");
}
}

loginButton.addEventListener("click", onClickButton);

//value = 값 (input안의 value 값이다)
//"dir check할때는 쌍따운표 x"

//1. 혹시 사용자가 아무것도 안쓸 경우, alert을 통해 이름을 써달라고 해보자.
//2. 만약 15자 보다 길면 alert "your name is too long"




