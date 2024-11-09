/* 
Om den näst sista siffran är jämn i personnumret är det en 
kvinna, om den är ojämn är det en man. 
Avgör om personen i föregående uppgift är man eller kvinna.
*/

let personnummer = [1, 9, 9, 2, 1, 2, 3, 0, "-", 0, 1, 2, 3]

// if ((personnummer[11] % 2) == 0 || (personnummer[9] % 2) == 0) {
//     console.log("Det är en kvinna.")
// } else {
//     console.log("Det är en man")
// }

if ((personnummer[personnummer.length - 2] % 2) == 0) {
    console.log("Det är en kvinna.")
} else {
    console.log("Det är en man")
}

// Lösning med prompt()
/*

let personnummer = prompt()
let personnummerLista = personnummer.split("")

if ((personnummerLista[personnummerLista.length - 2] % 2) == 0) {
    console.log("Det är en kvinna.")
} else {
    console.log("Det är en man")
}

*/
