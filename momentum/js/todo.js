const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    // JSON.stringify(value): value의 type이 어떤 것이든 string으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // event에 저장된 object의 element들 중 눌러진 target의 parentElement를 가져옴.
    const li = event.target.parentElement;
    li.classList.add("removing");
    setTimeout(() => {
        toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
        saveToDos();
        li.remove();
    }, 450);
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDOSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    // JSON.parse(value): string의 형태인 value를 원 형태로 복구
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach는 array의 각 item에 대해 function 을 실행함.
    // arrow function의 형태
    // (item) => console.log(`this is the turn of ${item}`)
    parsedToDos.forEach(paintToDo);
}

// array.filter(function)
// 함수를 array.length만큼 반복하여 필터 조건이 되는 함수를 만족하는 값을 포함한 새로운 array를 반환한다.
