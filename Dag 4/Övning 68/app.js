/* 
En array med 50 inlästa tal finns. 
Fördubbla värdet på talen på varje plats i arrayen.
*/

let nummmerLista = []

for (let i = 0; i < 50; i++) {
    // Man ha random tal, kan man kolla in Math.random() - https://www.w3schools.com/js/js_random.asp
    nummmerLista.push(i)
}

// console.log(nummmerLista)

for (let i = 0; i < 50; i++) {
    // nummmerLista[i] = nummmerLista[i] * 2
    nummmerLista[i] *= 2
}

console.log(nummmerLista)