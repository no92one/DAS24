/* 
Skriv ett program som läser in ett tal och skriver ut om det är jämnt. (Använd modulooperatorn)

10 % 2 = ?
(
    10 - 2 = 8
    8 - 2 = 6
    6 - 2 = 4
    4 - 2 = 2
    2 - 2 = 0
)
10 % 2 = 0

5 % 2 = ?
(
    5 - 2 = 3
    3 - 2 = 1
)
5 % 2 = 1

*/


// let tal = 8888885231317

// if ((tal % 2) == 0) {
//     console.log(tal + " är ett jämnt tal.")
// } else {
//     console.log(tal + " är ett ojämnt tal.")
// }


// console.log("0" === 0)
// console.log("0" == 0)

// let svar = prompt()
// console.log(svar)
// svar = prompt()
// console.log(svar)
// svar = prompt()
// console.log(svar)
// svar = prompt()
// console.log(svar)



let tal = prompt()
// Använd isNaN() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// console.log((tal % 2))

if (isNaN(tal)) {
    console.log("Du måste skriva in ett tal.")
} else if ((tal % 2) == 0) {
    console.log(tal + " är ett jämnt tal.")
} else {
    console.log(tal + " är ett ojämnt tal.")
}