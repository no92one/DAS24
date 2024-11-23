
function minFunktion() {
    let lokalVariabel = 5;

    if (true) {
        let lokalVariabel2 = 7;
        console.log(lokalVariabel); // Output: 5
        console.log(lokalVariabel2); // Output: 5
    }
}

minFunktion();
// console.log(lokalVariabel) // Detta skulle orsaka ett fel eftersom variabeln är lokal