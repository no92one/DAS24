let nummer = parseInt(prompt("Mata in ett positivt heltal."))

while (nummer < 0 || isNaN(nummer)) {
    console.log("Du måste mata in ett positivt heltal. Försök igen.")
    nummer = parseInt(prompt("Mata in ett positivt heltal."))
}

for (let i = 0; i <= nummer; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}