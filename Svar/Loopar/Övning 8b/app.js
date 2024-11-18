let max = 0

let antal = parseInt(prompt("Hur många tal vill du mata in?"))

for (let i = 0; i < antal; i++) {
    let nummer = parseFloat(prompt("Mata in ett tal:"))
    if (nummer > max) {
        max = nummer
    }
}

console.log("Det största talet är: " + max)