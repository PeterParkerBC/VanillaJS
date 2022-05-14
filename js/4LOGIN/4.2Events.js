const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 


function onLoginSubmit() {
    const username = loginInput.value; 
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long");
    }
    }
    
    loginForm.addEventListener("submit", onLoginSubmit);
    
    /*
    1. "submit" event = submit(제출)을 듣고 click or enter를 할때 자동으로 제출 
    2. 첫번째 우리가 한 것은, form을 submit 했을때, 우리는 이제 그 입력값을 받아낼수 있지만
    이제는 default로 refresh되는 것을 prevent 막아야해 
    */
