const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"; //내가 만드는 Class 이름은 대문자 변수로 만들자, 그래야 JS에서 Error를 알려준다. "string"으로 class 불러오면 error 못 알아본다! 

function onLoginSubmit(event) {
    event.preventDefault();                     
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    const username = loginInput.value;          
    localStorage.setItem(USERNAME_KEY, username);             //Localstorage.setitem(key, value) username 이름 저장공간 생성 
    paingreetings(username);
    } 

    function paingreetings (username) {                       //username을 인자(변수)로 받을수 있는 function(함수)를 만들었다
        greeting.innerText = `Hello ${username}`;             //하지만 우리가 함수를 호출(paingreetings)하는 위치에 따라   
        greeting.classList.remove(HIDDEN_CLASSNAME); 
    }

    const savedusername = localStorage.getItem(USERNAME_KEY); // localstorage.getItem (만약 localstorage에 저장 된 아이템이 있다면, savedusername에 저장) 

    if (savedusername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);           //if 조건문을 사용할때는 역으로 사고 해야 할때가 많다
        loginForm.addEventListener("submit", onLoginSubmit);    //html상에선 현재 form class="hidden"(제거)가 default 
    } else {
        paingreetings(savedusername);
    }

    /*
                                                                //form 안보이는 상황. 그래서 역으로 remove (HIDDEN_CLASSNAME)해줘야 한다 
    else {
        greeting.innerText = `Hello ${savedusername}`;          //else 는 만약 유저 정보가 local storage 있다면 
        greeting.classList.remove(HIDDEN_CLASSNAME);            //`Hello ${savedusername}` greeting(h1)에 표시 
    }                                                           //그리고 물론 greeting(h1)에 존재하는 HIDDEN_CLASSNAME -> remove
    
    완성
    1. 유저 이름 저장 
    2. refresh 눌러도 유저 이름으로 hello (username)화면에 뜬다!!

    Goal
    1. check if the user is in the local storage
    2. If - username is in the local storage -> remove form 
    3. If - username is not(null) in the local storage -> show the form 
    */
