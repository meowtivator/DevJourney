const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Enter를 누르거나, 버튼을 클릭할 때 발생하는 Event용 function
function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 수행동작이 이뤄지지 않도록 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // localStorage: 값을 저장/삭제하고 싶을 때 사용하는 function
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}! Have a Good day!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // EventListener function의 첫번째 argument는 브라우저로부터 항상 방금 막 일어난 event의 object를 받아서 저장함.
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
