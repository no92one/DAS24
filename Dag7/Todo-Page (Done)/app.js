let todoInput = document.getElementById("todoInput")
let addTodoButton = document.getElementById("addTodoButton")
let todoList = document.getElementById("todoList")

addTodoButton.addEventListener("click", addTodo())

todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo()
    }
})

function addTodo() {
    let todoText = todoInput.value.trim()
    if (todoText === "") {
        alert("Skriv en en todo!")
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

    todoItem.appendChild(deleteButton)
    todoItem.appendChild(checkbox)
    todoItem.appendChild(todoTextSpan)

    todoList.appendChild(todoItem)

    todoInput.value = ""
}