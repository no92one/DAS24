// 11. Största talet
let num1_11 = 15, num2_11 = 10
if (num1_11 > num2_11) {
    console.log(`${num1_11} är störst`)
}

// 12. Mer än dubbelt så stort
let num1_12 = 20, num2_12 = 9
if (num1_12 > 2 * num2_12) {
    console.log("För stort")
}

// 13. Jämnt tal
let number_13 = 4
if (number_13 % 2 === 0) {
    console.log("Talet är jämnt")
}

// 14. Udda eller jämnt
let number_14 = 7
if (number_14 % 2 === 0) {
    console.log("Talet är jämnt")
} else {
    console.log("Talet är udda")
}

// 15. Jämnt delbart
let num1_15 = 12, num2_15 = 4
if (num1_15 % num2_15 === 0) {
    console.log(`${num1_15} är jämnt delbart med ${num2_15}`)
} else {
    console.log(`${num1_15} är inte jämnt delbart med ${num2_15}`)
}

// 16. Rabatt
let quantity_16 = 10, pricePerUnit_16 = 120
let totalCost_16 = quantity_16 * pricePerUnit_16
if (totalCost_16 >= 1000) {
    totalCost_16 *= 0.9 // 10% rabatt
}
console.log(`Att betala: ${totalCost_16}`)

// 17. Division med felkontroll
let numerator_17 = 10, denominator_17 = 0
if (denominator_17 === 0) {
    console.log("Fel: nämnaren får inte vara 0")
} else {
    console.log(`Kvoten är: ${numerator_17 / denominator_17}`)
}

// 18. Tilldela värde baserat på villkor
let x_18 = 7, y_18 = 2
let a_18
if (x_18 > 5 + y_18) {
    a_18 = 2
} else {
    a_18 = 5
}
console.log(`Variabel A är: ${a_18}`)

// 19. Veckolön
let hourlyWage_19 = 150, hoursWorked_19 = 45
let weeklySalary_19
if (hoursWorked_19 > 40) {
    let overtime_19 = hoursWorked_19 - 40
    weeklySalary_19 = 40 * hourlyWage_19 + overtime_19 * 1.5 * hourlyWage_19
} else {
    weeklySalary_19 = hoursWorked_19 * hourlyWage_19
}
console.log(`Veckolön: ${weeklySalary_19}`)

// 20. Kvadrat av tal eller felmeddelande
let number_20 = 7
if (number_20 >= 0 && number_20 <= 9) {
    console.log(`Kvadraten är: ${number_20 * number_20}`)
} else {
    console.log("Fel: talet är utanför intervallet 0–9")
}

// 21. Testa intervall
let number_21 = 15
if (number_21 < -10 || number_21 > 10) {
    console.log("Talet är mindre än -10 eller större än 10")
}

// 22. Testa om tal är 0–9 men inte 5
let number_22 = 7
if (number_22 >= 0 && number_22 <= 9 && number_22 !== 5) {
    console.log("Talet är mellan 0 och 9 men inte 5")
}

// 23. Jämnt delbart med 3 men inte 30
let number_23 = 9
if (number_23 % 3 === 0 && number_23 % 30 !== 0) {
    console.log(`Talet dividerat med 3 är: ${number_23 / 3}`)
}

// 24. Kroppstemperatur
let temperature_24 = 34
if (temperature_24 < 35 || temperature_24 > 42) {
    console.log("Temperaturen är onormal")
}

// 25. Positivt eller negativt tal
let number_25 = -5
if (number_25 >= 0) {
    console.log("Talet är positivt")
} else {
    console.log("Talet är negativt")
}

// 26. Största talet eller lika
let num1_26 = 8, num2_26 = 8
if (num1_26 > num2_26) {
    console.log(`${num1_26} är störst`)
} else if (num2_26 > num1_26) {
    console.log(`${num2_26} är störst`)
} else {
    console.log("Talen är lika")
}

// 27. Minsta av tre tal
let num1_27 = 3, num2_27 = 5, num3_27 = 1
if (num1_27 <= num2_27 && num1_27 <= num3_27) {
    console.log(`Minsta talet är: ${num1_27}`)
} else if (num2_27 <= num1_27 && num2_27 <= num3_27) {
    console.log(`Minsta talet är: ${num2_27}`)
} else {
    console.log(`Minsta talet är: ${num3_27}`)
}

// 28. Temperaturintervall
let temperature_28 = 20
if (temperature_28 >= 18 && temperature_28 <= 25) {
    console.log("Lagom temp")
} else if (temperature_28 > 25) {
    console.log("För varmt")
} else {
    console.log("För kallt")
}

// 29. Beräkna ankomsttid
let departureHour_29 = 12, departureMinute_29 = 41
let travelHour_29 = 3, travelMinute_29 = 47

let arrivalHour_29 = departureHour_29 + travelHour_29
let arrivalMinute_29 = departureMinute_29 + travelMinute_29

if (arrivalMinute_29 >= 60) {
    arrivalHour_29 += Math.floor(arrivalMinute_29 / 60)
    arrivalMinute_29 %= 60
}
if (arrivalHour_29 >= 24) {
    arrivalHour_29 %= 24
    console.log(`Ankomsttid: ${arrivalHour_29}:${arrivalMinute_29} (NÄSTA DAG)`)
} else {
    console.log(`Ankomsttid: ${arrivalHour_29}:${arrivalMinute_29}`)
}

// 30. Intervallkontroll
let number_30 = 105
if (number_30 < 10) {
    console.log("Talet är mindre än 10")
} else if (number_30 < 100) {
    console.log("Talet är mindre än 100")
} else {
    console.log("Talet är större än 100")
}
