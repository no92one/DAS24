// 31. Läs in tal tills 0
let input_31
do {
    input_31 = parseInt(prompt("Ange ett tal (0 för att avsluta):"))
    if (input_31 !== 0) {
        console.log(`Inmatat tal: ${input_31}`)
    }
} while (input_31 !== 0)

// 32. Skriv ut talen 2, 4, 6, ..., 100
for (let i_32 = 2; i_32 <= 100; i_32 += 2) {
    console.log(i_32)
}

// 33. Skriv ut talen 100 till 0
for (let i_33 = 100; i_33 >= 0; i_33--) {
    console.log(i_33)
}

// 34. Läs in och skriv ut tecken tills `*` skrivs in
let input_34
do {
    input_34 = prompt("Ange ett tecken (* för att avsluta):")
    if (input_34 !== "*") {
        console.log(`Inmatat tecken: ${input_34}`)
    }
} while (input_34 !== "*")

// 35. Kvadrater för talen 1 till 9
for (let i_35 = 1; i_35 <= 9; i_35++) {
    let square_35 = i_35 * i_35
    console.log(`Kvadraten av ${i_35} är ${square_35}`)
}

// 36. Bankräkning med ränta
let interestRate_36 = parseFloat(prompt("Ange räntesats (i procent):"))
let balance_36 = 1000
for (let year_36 = 1; year_36 <= 10; year_36++) {
    balance_36 += balance_36 * (interestRate_36 / 100)
    console.log(`År ${year_36}: Saldo är ${balance_36.toFixed(2)} kr`)
}

// 37. Läs in och skriv ut ett antal tal
let count_37 = parseInt(prompt("Hur många tal vill du ange?"))
for (let i_37 = 1; i_37 <= count_37; i_37++) {
    let num_37 = parseInt(prompt(`Ange tal ${i_37}:`))
    console.log(`Inmatat tal ${i_37}: ${num_37}`)
}

// 38. Kommunens befolkningsutveckling
let yearInput_38 = parseInt(prompt("Ange ett år:"))
let population_38 = 26000
for (let year_38 = 2016; year_38 < yearInput_38; year_38++) {
    let births_38 = population_38 * 0.007
    let deaths_38 = population_38 * 0.006
    let immigrants_38 = 300
    let emigrants_38 = 325
    population_38 += births_38 - deaths_38 + immigrants_38 - emigrants_38
}
console.log(`Befolkningsantal år ${yearInput_38}: ${Math.round(population_38)}`)

// 39. Pris inkl moms (upprepad inmatning)
let price_39
do {
    price_39 = parseFloat(prompt("Ange pris exkl moms (0 för att avsluta):"))
    if (price_39 !== 0) {
        let priceWithTax_39 = price_39 * 1.25
        console.log(`Pris inkl moms: ${priceWithTax_39.toFixed(2)} kr`)
    }
} while (price_39 !== 0)

// 40. Funktion f(x) = x^2 + 2x + 1 för -10 ≤ x ≤ 10
for (let x_40 = -10; x_40 <= 10; x_40++) {
    let result_40 = x_40 * x_40 + 2 * x_40 + 1
    console.log(`f(${x_40}) = ${result_40}`)
}

// 41. Summan av talen 1 till 50
let sum_41 = 0
for (let i_41 = 1; i_41 <= 50; i_41++) {
    sum_41 += i_41
}
console.log(`Summan av talen 1 till 50 är: ${sum_41}`)

// 42. Läs in och summera 20 tal
let sum_42 = 0
for (let i_42 = 1; i_42 <= 20; i_42++) {
    let num_42 = parseInt(prompt(`Ange tal ${i_42}:`))
    sum_42 += num_42
}
console.log(`Summan av de 20 talen är: ${sum_42}`)

// 43. Summan av jämna tal från 2 till 30
let sum_43 = 0
for (let i_43 = 2; i_43 <= 30; i_43 += 2) {
    sum_43 += i_43
}
console.log(`Summan av jämna tal från 2 till 30 är: ${sum_43}`)

// 44. Läs in antal tal att summera
let count_44 = parseInt(prompt("Hur många tal vill du summera?"))
let sum_44 = 0
for (let i_44 = 1; i_44 <= count_44; i_44++) {
    let num_44 = parseInt(prompt(`Ange tal ${i_44}:`))
    sum_44 += num_44
}
console.log(`Summan av de ${count_44} talen är: ${sum_44}`)

// 45. Hur många termer krävs för att nå 100 000?
let term_45 = parseInt(prompt("Ange en term:"))
let sum_45 = 0
let terms_45 = 0
while (sum_45 <= 100000) {
    sum_45 += term_45
    terms_45++
}
console.log(`Det krävs ${terms_45} termer för att nå 100 000.`)

// 46. Hur många dagar krävs för att tjäna en miljon?
let salary_46 = 0.01
let days_46 = 0
let total_46 = 0
while (total_46 < 1000000) {
    total_46 += salary_46
    salary_46 *= 2
    days_46++
}
console.log(`Det krävs ${days_46} dagar för att tjäna en miljon kronor.`)

// 47. Produkten av ojämna heltal från 1 till 15
let product_47 = 1
for (let i_47 = 1; i_47 <= 15; i_47 += 2) {
    product_47 *= i_47
}
console.log(`Produkten av ojämna tal från 1 till 15 är: ${product_47}`)

// 48. Fakulteten av ett tal
let n_48 = parseInt(prompt("Ange ett tal för att beräkna n!:"))
let factorial_48 = 1
for (let i_48 = 1; i_48 <= n_48; i_48++) {
    factorial_48 *= i_48
}
console.log(`${n_48}! = ${factorial_48}`)

// 49. Beräkna x^n
let x_49 = parseInt(prompt("Ange värdet för x:"))
let n_49 = parseInt(prompt("Ange värdet för n:"))
let result_49 = 1
for (let i_49 = 0; i_49 < n_49; i_49++) {
    result_49 *= x_49
}
console.log(`${x_49} upphöjt till ${n_49} är: ${result_49}`)

// 50. Multiplikationstabell för 1 till 9
for (let i_50 = 1; i_50 <= 9; i_50++) {
    console.log(`Multiplikationstabell för ${i_50}:`)
    for (let j_50 = 1; j_50 <= 10; j_50++) {
        console.log(`${i_50} x ${j_50} = ${i_50 * j_50}`)
    }
}

// 51. Läs in 100 tal och räkna hur många gånger talet 7 förekommer
let count_51 = 0
for (let i_51 = 1; i_51 <= 100; i_51++) {
    let num_51 = parseInt(prompt(`Ange tal ${i_51}:`))
    if (num_51 === 7) {
        count_51++
    }
}
console.log(`Talet 7 förekom ${count_51} gånger.`)

// 52. Läs in 100 tal och beräkna summan av positiva tal
let sum_52 = 0
for (let i_52 = 1; i_52 <= 100; i_52++) {
    let num_52 = parseInt(prompt(`Ange tal ${i_52}:`))
    if (num_52 > 0) {
        sum_52 += num_52
    }
}
console.log(`Summan av positiva tal är: ${sum_52}`)

// 53. Läs in 10 korrekta tal (5000 < n < 10000) och skriv ut summan och medelvärdet
let sum_53 = 0
let count_53 = 0
for (let i_53 = 1; i_53 <= 10; i_53++) {
    let num_53 = parseInt(prompt(`Ange tal ${i_53} (mellan 5000 och 10000):`))
    if (num_53 > 5000 && num_53 < 10000) {
        sum_53 += num_53
        count_53++
    }
}
let average_53 = count_53 > 0 ? sum_53 / count_53 : 0
console.log(`Summan av de korrekta talen är: ${sum_53}`)
console.log(`Medelvärdet av de korrekta talen är: ${average_53}`)

// 54. Läs in 100 heltal och räkna hur många som är positiva och negativa
let positiveCount_54 = 0
let negativeCount_54 = 0
for (let i_54 = 1; i_54 <= 100; i_54++) {
    let num_54 = parseInt(prompt(`Ange tal ${i_54}:`))
    if (num_54 > 0) {
        positiveCount_54++
    } else if (num_54 < 0) {
        negativeCount_54++
    }
}
console.log(`Antal positiva tal: ${positiveCount_54}`)
console.log(`Antal negativa tal: ${negativeCount_54}`)

// 55. Läs in 101 tal och beräkna summan av tal större och mindre än det första talet
let first_55 = parseInt(prompt("Ange det första talet:"))
let greaterSum_55 = 0
let lesserSum_55 = 0
for (let i_55 = 2; i_55 <= 101; i_55++) {
    let num_55 = parseInt(prompt(`Ange tal ${i_55}:`))
    if (num_55 > first_55) {
        greaterSum_55 += num_55
    } else if (num_55 < first_55) {
        lesserSum_55 += num_55
    }
}
console.log(`Summan av tal större än det första: ${greaterSum_55}`)
console.log(`Summan av tal mindre än det första: ${lesserSum_55}`)


// 56. Läs in tal tills 9999 och beräkna medelvärde
let sum_56 = 0
let count_56 = 0
let num_56
do {
    num_56 = parseInt(prompt("Ange ett tal (9999 för att avsluta):"))
    if (num_56 !== 9999) {
        sum_56 += num_56
        count_56++
    }
} while (num_56 !== 9999)
let average_56 = count_56 > 0 ? sum_56 / count_56 : 0
console.log(`Medelvärdet av talen är: ${average_56}`)

// 57. Beräkna bensinförbrukning per mil för varje tankning
let totalLiters_57 = 0
let totalDistance_57 = 0
let liters_57
do {
    liters_57 = parseFloat(prompt("Ange antal liter bensin (0 för att avsluta):"))
    if (liters_57 !== 0) {
        let distance_57 = parseFloat(prompt("Ange antal körda mil:"))
        totalLiters_57 += liters_57
        totalDistance_57 += distance_57
        let consumption_57 = liters_57 / distance_57
        console.log(`Bensinförbrukning för denna tankning: ${consumption_57.toFixed(2)} liter/mil`)
    }
} while (liters_57 !== 0)
let averageConsumption_57 = totalDistance_57 > 0 ? totalLiters_57 / totalDistance_57 : 0
console.log(`Genomsnittlig bensinförbrukning: ${averageConsumption_57.toFixed(2)} liter/mil`)

// 58. Läs in 10 tal och hitta det största
let max_58 = Number.MIN_SAFE_INTEGER
for (let i_58 = 1; i_58 <= 10; i_58++) {
    let num_58 = parseInt(prompt(`Ange tal ${i_58}:`))
    if (num_58 > max_58) {
        max_58 = num_58
    }
}
console.log(`Det största talet är: ${max_58}`)

// 59. Läs in ett antal tal och hitta det största och minsta
let count_59 = parseInt(prompt("Hur många tal vill du ange?"))
let max_59 = Number.MIN_SAFE_INTEGER
let min_59 = Number.MAX_SAFE_INTEGER
for (let i_59 = 1; i_59 <= count_59; i_59++) {
    let num_59 = parseInt(prompt(`Ange tal ${i_59}:`))
    if (num_59 > max_59) {
        max_59 = num_59
    }
    if (num_59 < min_59) {
        min_59 = num_59
    }
}
console.log(`Det största talet är: ${max_59}`)
console.log(`Det minsta talet är: ${min_59}`)

// 60. Läs in positiva tal och räkna intilliggande lika
let prev_60 = parseInt(prompt("Ange första positiva talet (0 för att avsluta):"))
let count_60 = 0
let num_60
do {
    num_60 = parseInt(prompt("Ange nästa tal (0 för att avsluta):"))
    if (num_60 !== 0 && num_60 === prev_60) {
        count_60++
    }
    prev_60 = num_60
} while (num_60 !== 0)
console.log(`Antalet gånger två intilliggande tal är lika: ${count_60}`)

// 61. Kontrollera fel i sorteringsordningen av tal
let prev_61 = parseInt(prompt("Ange första talet (0 för att avsluta):"))
let position_61 = 1
let num_61
do {
    num_61 = parseInt(prompt(`Ange tal ${position_61 + 1} (0 för att avsluta):`))
    position_61++
    if (num_61 !== 0 && num_61 < prev_61) {
        console.log(`Tal nr ${position_61} är fel, dess värde är ${num_61}`)
    }
    prev_61 = num_61
} while (num_61 !== 0)

// 62. Kontrollera om alla 10 tal är inom intervallet 5000 till 10000
let isValid_62 = true
for (let i_62 = 1; i_62 <= 10; i_62++) {
    let num_62 = parseInt(prompt(`Ange tal ${i_62} (mellan 5000 och 10000):`))
    if (num_62 <= 5000 || num_62 >= 10000) {
        isValid_62 = false
    }
}
if (isValid_62) {
    console.log("RÄTT")
} else {
    console.log("NÅGOT TAL VAR UTANFÖR INTERVALLET")
}

// 63. Kontrollera sorteringsordning och skriv felmeddelande
let prev_63 = parseInt(prompt("Ange första talet (0 för att avsluta):"))
let num_63
let isSorted_63 = true
do {
    num_63 = parseInt(prompt("Ange nästa tal (0 för att avsluta):"))
    if (num_63 !== 0 && num_63 < prev_63) {
        isSorted_63 = false
    }
    prev_63 = num_63
} while (num_63 !== 0)
if (!isSorted_63) {
    console.log("Fel sorteringsordning")
} else {
    console.log("Talföljden är korrekt sorterad")
}

// 64. Hitta det största och näst största talet av 10 positiva tal
let big_64 = Number.MIN_SAFE_INTEGER
let nextBig_64 = Number.MIN_SAFE_INTEGER
for (let i_64 = 1; i_64 <= 10; i_64++) {
    let num_64 = parseInt(prompt(`Ange tal ${i_64}:`))
    if (num_64 > big_64) {
        nextBig_64 = big_64
        big_64 = num_64
    } else if (num_64 > nextBig_64) {
        nextBig_64 = num_64
    }
}
console.log(`Det största talet är: ${big_64}`)
console.log(`Det näst största talet är: ${nextBig_64}`)

// 65. Skillnaden mellan det största och näst största talet av 100 positiva tal
let max_65 = Number.MIN_SAFE_INTEGER
let secondMax_65 = Number.MIN_SAFE_INTEGER
for (let i_65 = 1; i_65 <= 100; i_65++) {
    let num_65 = parseInt(prompt(`Ange tal ${i_65}:`))
    if (num_65 > max_65) {
        secondMax_65 = max_65
        max_65 = num_65
    } else if (num_65 > secondMax_65) {
        secondMax_65 = num_65
    }
}
let difference_65 = max_65 - secondMax_65
console.log(`Skillnaden mellan det största och näst största talet är: ${difference_65}`)
