let todoList = [];
let doneList = [];
let running = true;

while (running) {
    let choice = prompt("Vad vill du göra?" +
        "\n1. Skriv ut listan" +
        "\n2. Lägg till något i listan" +
        "\n3. Ta bort en sak överst i listan" +
        "\n4. Ta bort en sak längst ner i listan" +
        "\n5. Avsluta programmet" +
        "\n6. Ta bort en sak baserat på namn" +
        "\n7. Skriv ut har-gjort-listan" +
        "\n8. Flytta en sak till toppen av att-göra-listan" +
        "\n9. Flytta en sak till botten av att-göra-listan" +
        "\n10. Avsluta programmet"
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

    } else if (choice == "6") {

        let name = prompt("Ange namnet på saken som ska tas bort:")
        let index = todoList.indexOf(name)

        if (index !== -1) {
            let removedItem = todoList.splice(index, 1)[0];
            doneList.push(removedItem)
            console.log(`"${removedItem}" togs bort från listan.`)
        } else {
            console.log(`"${name}" finns inte i listan.`)
        }

    } else if (choice == "7") {
        if (doneList.length === 0) {
            console.log("Har-gjort-listan är tom.")
        } else {
            console.log("Din har-gjort-lista:")

            for (let i = 0; i < doneList.length; i++) {
                console.log((i + 1) + ". " + doneList[i])
            }
        }

    } else if (choice == "8") {
        let name = prompt("Ange namnet på saken som ska flyttas till toppen:")
        let index = todoList.indexOf(name)

        if (index !== -1) {
            let item = todoList.splice(index, 1)[0];
            todoList.unshift(item)
            console.log(`"${item}" har flyttats till toppen av listan.`)
        } else {
            console.log(`"${name}" finns inte i listan.`)
        }
    } else if (choice == "9") {
        let name = prompt("Ange namnet på saken som ska flyttas till botten:")
        let index = todoList.indexOf(name)

        if (index !== -1) {
            let item = todoList.splice(index, 1)[0]
            todoList.push(item)
            console.log(`"${item}" har flyttats till botten av listan.`)
        } else {
            console.log(`"${name}" finns inte i listan.`)
        }

    } else if (choice == "10") {
        console.log("Programmet avslutas.")
        running = false

    } else {
        console.log("Ogiltigt val. Försök igen.")
    }
}