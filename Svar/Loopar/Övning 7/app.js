let x = 5
let resultat = ""

for (let i = 0; i < x; i++) {
    resultat += (i * 3) + ", "
}
resultat = resultat.slice(0, -2);

console.log(resultat);
