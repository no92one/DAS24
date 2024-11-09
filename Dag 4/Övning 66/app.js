/* 
I en array finns ett personnummer. Skriv ett program som 
kontrollerar att födelsedatum och de fyra sista siffrorna 
åtskiljs av ett bindestreck. 

Skriv ut ett felmeddelande om så ej är fallet.
*/

let personnummer = [1, 9, 9, 2, 1, 2, 3, 0, "-", 0, 1, 2, 3]

// // if (personnummer[8] == "-" || personnummer[6] == "-") {
// //     console.log("Ja det är ett giltigt personnummer.")
// // } else {
// //     console.log("Nej, detta är inte ett giltigt personnummer.")
// // }

if (personnummer[personnummer.length - 5] == "-") {
    console.log("Ja det är ett giltigt personnummer.")
} else {
    console.log("Nej, detta är inte ett giltigt personnummer.")
}

// Lösning med prompt()
/*

let personnummer = prompt()

// Har man ett String-värde kan man använda en funktion 
// som heter .split(), för att skapa en lista där varje 
// symbol blir ett eget element i listan. 
// Läs mer om split() - https://javascript.info/array-methods#split-and-join

let personnummerLista = personnummer.split("")

if (personnummerLista[personnummerLista.length - 5] == "-") {
    console.log("Ja det är ett giltigt personnummer.")
} else {
    console.log("Nej, detta är inte ett giltigt personnummer.")
}

*/