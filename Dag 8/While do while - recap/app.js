// Vi använder while och do while loopar, när inte vet hur många gånger vi ska loopa något


for (let i = 0; i < 5; i++) {
    console.log(i)
}

let i2 = 0 // skapar starvärde utanför while loopen
while (i2 < 5) /*While-loopens vilkor, avgör om loopen ska fortsätta köras */ {
    console.log(i2);
    i2++ // Vi måste själva hantera uppdatering av startvärdet som används i while-loopens vilkor 
}


// Kontrollera sträng värden
let text = "hej!!!!"
while  (text == "hej") {
    console.log(text)
    text = "alöskdna"
}

// 1 - Kolla om vilkoret stämmer
// 2 - Kör whlie loopens kod

//

let text2 = "Hej!!!" 
do {
    console.log(text)
    text2 = "alöskdna"
} while (text2 == "hej")

    // 1 - Kör whlie loopens kod
// 2 - Kolla om vilkoret stämmer
    


// finns bara 1 och 2 som menyval
let menyval = 2

while (!menyval  != 1 || menyval != 2) {
    console.log("Välj nytt menyval!")
    // lägg till kod som läter användaren ändra värdet i menyval
}


console.log("Du har valt ett giltigt menyval")