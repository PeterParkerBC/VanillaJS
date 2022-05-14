const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting"); //4. html h1 ID생성 후 JS 변수 추가 (class="hidden" 포함)
const HIDDEN_CLASSNAME = "hidden"; //html, css의 property가지고 올때 JS에서 변수 지정 (에러 방지)                          


function onLoginSubmit(event) {
    event.preventDefault();                     //1. 기본설정 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);  //2. Form (표)를 숨김 ("hidden"으로)
    const username = loginInput.value;          //3. login-input data-> save(저장) -> username(변수) 
    localStorage.setItem("username", username); //7. Local Storage 웹 데이터베이스에 저장
    greeting.innerText = `Hello ${username}`;   //5. h1에 표시 (데이터 상 저장, 화면 표시 X (class="hidden" 존재)) 
    greeting.classList.remove(HIDDEN_CLASSNAME);//6. "hidden" h1(제목)에서 제거, 쉽게 말해 '표시', but (5번) innerText가 포함되어야 한다 (조건)
    }

    
    loginForm.addEventListener("submit", onLoginSubmit);