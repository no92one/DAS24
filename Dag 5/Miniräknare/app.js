/*
Miniräknare ska ha en meny som innehåller alternativen och 
alla alternativ ska vara funktioner:

- Addera
- Subtrahera
- Multiplicera
- Dividera
- Roten ur
- Upphöjt till
- Stäng av

Miniräknaren ska köras fram till att man väljer stäng av.
*/

console.log("Välkommen till min miniräknare!")

let run = true

while (run) {

    let answer = prompt("Välj en av dessa alternativen?"
        + "\n1. Addera"
        + "\n2. Subtrahera"
        + "\n3. Multiplicera"
        + "\n4. Dividera"
        + "\n9. Avsluta")


    if (answer == "1") {
        add()
    } else if (answer == "2") {
        sub()
    } else if (answer == "3") {
        mul()
    } else if (answer == "4") {
        div()
    } else if (answer == "9") {
        console.log("Du har valt menyval 9!")
        console.log("Programmet avslutas")
        run = false
    } else {
        console.log("Du måste välja menyval 1-4 eller 9.")
    }
}


function add() {
    let tal1 = getNumber("Tal 1")
    let tal2 = getNumber("Tal 2")

    let result = tal1 + tal2
    alert(tal1 + " + " + tal2 + " = " + result)
    console.log(tal1 + " + " + tal2 + " = " + result)
}

function div() {
    let tal1 = getNumber("Tal 1")
    let tal2 = getNumber("Tal 2")

    let result = tal1 / tal2
    alert(tal1 + " / " + tal2 + " = " + result)
    console.log(tal1 + " / " + tal2 + " = " + result)
}

function sub() {
    let tal1 = getNumber("Tal 1")
    let tal2 = getNumber("Tal 2")

    let result = tal1 - tal2
    alert(tal1 + " - " + tal2 + " = " + result)
    console.log(tal1 + " - " + tal2 + " = " + result)
}

function mul() {
    let tal1 = getNumber("Tal 1")
    let tal2 = getNumber("Tal 2")

    let result = tal1 * tal2

    alert(tal1 + " * " + tal2 + " = " + result)
    console.log(tal1 + " * " + tal2 + " = " + result)
}

function getNumber(text) {
    let number = prompt(text)

    number = parseFloat(number)

    if (isNaN(number)) {
        return 0
    } else {
        return number
    }
}