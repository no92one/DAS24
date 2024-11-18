let lBil1 = ["Volvo", "S70", 2010]
let lBil2 = [2015, "Avensis", "Toyota"]
let lBil3 = [2006, "Toyota", "Avensis"]

// console.log(lBil1[0])
// console.log(lBil2[0])
// console.log(lBil3[0])

let oBil1 = {
    brand: "Volvo",
    model: "S70",
    year: 2010
}

let oBil2 = {
    year: 2015,
    model: "Avensis",
    brand: "Toyota"
}

let oBil3 = {
    year: 2010,
    brand: "Toyota",
    model: "Avensis",
}

// console.log(oBil1.year)
// console.log(oBil2.year)
// console.log(oBil3.year)


let parent = {
    name: "Bengt",
    lastname: "Andersson",
    age: 45,
    partner: {
        name: "Hans",
        lastname: "Andersson",
        age: 49,
    },
    children: [
        {
            lastname: "Andersson",
            age: 8,
            name: "Henrietta",
        },
        {
            age: 4,
            name: "Frank",
            lastname: "Andersson",
        },
        {
            lastname: "Andersson",
            name: "Berit",
            age: 1,
        }
    ]
}


console.log(parent.name)
console.log(parent.partner.name)

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].name)
    console.log(parent.children[i].age)
}





let firstname = prompt()
let lastname = prompt()
let age = prompt()

let testObjekt = {
    firstname: firstname,
    lastname: lastname,
    age: parseFloat(age)
}

console.log(testObjekt)
console.log([firstname, lastname, parseFloat(age)])

