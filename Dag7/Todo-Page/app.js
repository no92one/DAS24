/*
1. Hämta text från vårt text-fält
2. Koppla knappen till att hämta texten från text-fältet
3. Lägga till todo'n i vår ul-lista
4. Lägga till en ta bort-knapp i todo-elementet
5. Lägg till en checkbox för vårt todo-element
6. När checkboxen är i kryssad, ska todo-elementet's text bli överstrukit.
*/

// console.log(document.getElementById("todoInput"))
// console.log(document.getElementById("todoInput").value)
// console.dir(document.getElementById("todoInput"))

let textInput = document.getElementById("todoInput")
let todoButton = document.getElementById("addTodoButton")
let todoList = document.getElementById("todoList")

console.dir(textInput)

todoButton.addEventListener("click", () => {
    // console.log(textInput.value)

    let newTodo = document.createElement("li") // Skapar ett li-element.
    // console.log(newTodoItem)
    // console.dir(newTodo)

    let todoText = document.createElement("span") // Skapar ett span-element.
    todoText.textContent = textInput.value // Hämtar texten som finns in vår textInput och stoppar in den texten i vår todoText.

    let todoRemoveBtn = document.createElement("button")
    todoRemoveBtn.textContent = "x"
    todoRemoveBtn.addEventListener("click", () => {
        todoList.removeChild(newTodo)
    })

    let todoCheckbox = document.createElement("input")
    todoCheckbox.type = "checkbox"
    todoCheckbox.addEventListener("change", () => {
        todoText.classList.toggle("todoDone")
    })

    // console.log(todoText)

    newTodo.appendChild(todoRemoveBtn) // Vi använder appenChild() för att stoppa in vår todoText in i newTodo.
    newTodo.appendChild(todoCheckbox) // Vi använder appenChild() för att stoppa in vår todoText in i newTodo.
    newTodo.appendChild(todoText) // Vi använder appenChild() för att stoppa in vår todoText in i newTodo.
    // console.log(newTodo)

    todoList.appendChild(newTodo)
})
