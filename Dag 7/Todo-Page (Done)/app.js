let todoInput = document.getElementById("todoInput")
let addTodoButton = document.getElementById("addTodoButton")
let todoList = document.getElementById("todoList")

addTodoButton.addEventListener("click", addTodo)

todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo()
    }
})

function addTodo() {
    let todoText = todoInput.value.trim()
    if (todoText === "") {
        alert("Skriv en  todo!")
        return
    }

    let todoItem = document.createElement("li")
    todoItem.className = "todoItem"

    let todoTextSpan = document.createElement("span")
    todoTextSpan.textContent = todoText

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("change", () => {
        todoItem.classList.toggle("completed", checkbox.checked)
    })

    let deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    deleteButton.className = "deleteBtn"
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem)
    })

    /* Innan vi använder appenChild
        <li class="todoItem"></li>
        <span>Hämta barnen</span>
        <input type="checkbox">
        <button class="deleteBtn">x</button>
    */

    todoItem.appendChild(deleteButton)
    todoItem.appendChild(checkbox)
    todoItem.appendChild(todoTextSpan)

    /* Efter appenChild
        <li class="todoItem">
            <button class="deleteBtn">x</button>
            <input type="checkbox">
            <span>Hämta barnen</span>
        </li>
    */

    todoList.appendChild(todoItem)

    todoInput.value = ""
}











/*

20 % 7 = ?
-------------
20 - 7 = 13
13 - 7 = 6
6 - 7 = -1 (resten får aldrig vara ett negativt tal)
-------------
restltatet blir 6

20 % 7 = 6

------------------------------------------------------------------------------
x % 2 = 1 eller 0
x % 2 = 1 = ojämnt tal
x % 2 = 0 = jämnt tal


x = 5

5 % 2 = ?
5 - 2 = 3 
3 - 2 = 1
5 % 2 = 1


x = 8

8 % 2 = ?
8 - 2 = 6 
6 - 2 = 4
4 - 2 = 2
2 - 2 = 0
8 % 2 = 0








*/









