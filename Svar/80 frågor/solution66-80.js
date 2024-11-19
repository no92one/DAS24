// 66. Kontrollera bindestreck i personnummer
let personnummer_66 = ["19900101-1234"]
if (!personnummer_66[0].includes("-")) {
    console.log("Fel: Personnumret saknar bindestreck mellan födelsedatum och de fyra sista siffrorna.")
} else {
    console.log("Personnumret har korrekt format.")
}

// 67. Avgör kön baserat på näst sista siffran
let personnummer_67 = ["19900101-1234"]
let nästSistaSiffra_67 = parseInt(personnummer_67[0].split("-")[1].charAt(2))
if (nästSistaSiffra_67 % 2 === 0) {
    console.log("Personen är en kvinna.")
} else {
    console.log("Personen är en man.")
}

// 68. Fördubbla värdena i en array med 50 tal
let numbers_68 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))
for (let i_68 = 0; i_68 < numbers_68.length; i_68++) {
    numbers_68[i_68] *= 2
}
console.log("Fördubblade värden:", numbers_68)

// 69. Addera 2 till talen på jämna index
let numbers_69 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))
for (let i_69 = 0; i_69 < numbers_69.length; i_69 += 2) {
    numbers_69[i_69] += 2
}
console.log("Adderade värden på jämna index:", numbers_69)

// 70. Räkna positiva tal i en array
let numbers_70 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200) - 100)
let positiveCount_70 = numbers_70.filter(num => num > 0).length
console.log(`Antal positiva tal: ${positiveCount_70}`)

// 71. Räkna tal större än det första
let numbers_71 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))
let first_71 = numbers_71[0]
let count_71 = numbers_71.filter(num => num > first_71).length
console.log(`Antal tal större än det första (${first_71}): ${count_71}`)

// 72. Hitta index för sista negativa talet
let numbers_72 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200) - 100)
let lastNegativeIndex_72 = -1
for (let i_72 = numbers_72.length - 1; i_72 >= 0; i_72--) {
    if (numbers_72[i_72] < 0) {
        lastNegativeIndex_72 = i_72
        break
    }
}
if (lastNegativeIndex_72 !== -1) {
    console.log(`Index för sista negativa talet: ${lastNegativeIndex_72}`)
} else {
    console.log("Inga negativa tal i arrayen.")
}

// 73. Beräkna summan och medelvärdet
let numbers_73 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))
let sum_73 = numbers_73.reduce((acc, num) => acc + num, 0)
let average_73 = sum_73 / numbers_73.length
console.log(`Summan är: ${sum_73}, Medelvärdet är: ${average_73}`)

// 74. Hitta största och minsta talet
let numbers_74 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))
let max_74 = Math.max(...numbers_74)
let min_74 = Math.min(...numbers_74)
console.log(`Största talet är: ${max_74}, Minsta talet är: ${min_74}`)

// 75. Summan av positiva och negativa tal
let numbers_75 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200) - 100)
let positiveSum_75 = numbers_75.filter(num => num > 0).reduce((acc, num) => acc + num, 0)
let negativeSum_75 = numbers_75.filter(num => num < 0).reduce((acc, num) => acc + num, 0)
console.log(`Summan av positiva tal: ${positiveSum_75}`)
console.log(`Summan av negativa tal: ${negativeSum_75}`)

// 76. Kopiera och vänd en array
let numbers_76 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
let reversed_76 = [...numbers_76].reverse()
console.log("Original array:", numbers_76)
console.log("Omvänd array:", reversed_76)

// 77. Skriv ut array baklänges (utan ny array)
let numbers_77 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
console.log("Array baklänges:")
for (let i_77 = numbers_77.length - 1; i_77 >= 0; i_77--) {
    console.log(numbers_77[i_77])
}

// 78. Kontrollera bråkets nämnare
let fraction_78 = [parseInt(prompt("Ange täljaren:")), parseInt(prompt("Ange nämnaren:"))]
if (fraction_78[1] === 0) {
    console.log("Fel: Nämnaren får inte vara 0.")
} else {
    console.log(`Bråket är: ${fraction_78[0]}/${fraction_78[1]}`)
}

// 79. Gör nämnaren positiv
let fraction_79 = [parseInt(prompt("Ange täljaren:")), parseInt(prompt("Ange nämnaren:"))]
if (fraction_79[1] < 0) {
    fraction_79[0] = -fraction_79[0]
    fraction_79[1] = -fraction_79[1]
}
console.log(`Bråket är: ${fraction_79[0]}/${fraction_79[1]}`)

// 80. Förkorta bråket
let fraction_80 = [parseInt(prompt("Ange täljaren:")), parseInt(prompt("Ange nämnaren:"))]
function gcd_80(a, b) {
    return b === 0 ? a : gcd_80(b, a % b)
}
let divisor_80 = gcd_80(fraction_80[0], fraction_80[1])
fraction_80[0] /= divisor_80
fraction_80[1] /= divisor_80
console.log(`Förkortat bråk: ${fraction_80[0]}/${fraction_80[1]}`)
