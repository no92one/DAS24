let todoList = []
let running = true

while (running) {
    let choice = prompt("Vad vill du göra?" +
        "\n1. Skriv ut listan" +
        "\n2. Lägg till något i listan" +
        "\n3. Ta bort en sak överst i listan" +
        "\n4. Ta bort en sak längst ner i listan" +
        "\n5. Avsluta programmet"
    )

    if (choice == "1") {
        if (todoList.length === 0) {
            console.log("Listan är tom.")
        } else {
            console.log("Todo's")

            for (let i = 0; i < todoList.length; i++) {
                console.log((i + 1) + ". " + todoList[i])
            }
        }

    } else if (choice == "2") {
        let newTodo = prompt("Vad vill du lägga till i listan?")

        if (newTodo.trim() !== "") {
            todoList.push(newTodo)
            console.log(`"${newTodo}" har lagts till i listan.`)
        } else {
            console.log("Du kan inte lägga till en tom post.")
        }

    } else if (choice == "3") {
        if (todoList.length > 0) {
            let removedTodo = todoList.shift()

            console.log(`"${removedTodo}" togs bort från toppen av listan.`)
        } else {
            console.log("Listan är redan tom.")
        }

    } else if (choice == "4") {
        if (todoList.length > 0) {
            let removedTodo = todoList.pop()

            console.log(`"${removedTodo}" togs bort från botten av listan.`)
        } else {
            console.log("Listan är redan tom.")
        }

    } else if (choice == "5") {
        console.log("Programmet avslutas.")
        running = false

    } else {
        console.log("Ogiltigt val. Försök igen.")
    }
}
