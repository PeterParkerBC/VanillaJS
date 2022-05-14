const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 


function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    } 

    
    
    loginForm.addEventListener("submit", onLoginSubmit);

/*
    매개변수란 (argument) - 임의의 변수(이름)   
    인수란 (property) - 보내는 값 

    (순서)
    1. event code는 먼저 우리의 function을 찾는다 
    2. event("submit")을 찾는다 
    3. .addEventListener"submit" event는 이미 ()버튼을 default로 누른다 
    4. Event({object정보}) 함께 function에게 전달
    *  그래서, function뒤에 () X
    5. argument(매개변수)는 그 데이터를 받는다 
    6. 매개변수를 함수 안으로 넣는다 
    7. 출력한다  

    참고) 
    - () empty (a) a=argument 
    - empty: 이벤트 데이터(정보)가 들어오지 않는다
    - argument: 들어온다 

    event.Methods(기능)
    .preventDefault = Stops/prevents any default(기본 설정값)
*/