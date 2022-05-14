const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    }

    function DetactLink(event) {
    event.preventDefault();
    console.dir(event);
    }
    
    loginForm.addEventListener("submit", onLoginSubmit);
    link.addEventListener("click", DetactLink);


    /*
    Link click event 
    - alert기능은 페이지 Freeze (아무것도 못하게 막는다)
    - alert 기능은 개발자들이 안쓴다 
    - event 쪽에서 function에 () 포함 X. 중요! 만약 넣으면 한번만 실행되고 끝. */