let max = 0

while (true) {
    let nummer = parseFloat(prompt("Mata in ett tal:"))

    if (nummer == 0) {
        break
    } else if (nummer > max) {
        max = nummer
    }
}

console.log("Det största talet är: " + max)