let max = 0

for (let i = 0; i < 3; i++) {
    let nummer = parseFloat(prompt("Mata in ett tal:"))
    if (nummer > max) {
        max = nummer
    }
}

console.log("Det största talet är: " + max)