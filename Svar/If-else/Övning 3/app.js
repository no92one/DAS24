let tal1 = 5
let tal2 = 9
let tal3 = 2


if (tal1 < tal2 && tal1 < tal3) {
    
    if (tal2 < tal3) {
        console.log(tal1 + " " + tal2 + " " + tal3)
    } else {
        console.log(tal1 + " " + tal3 + " " + tal2)
    }

} else if (tal2 < tal1 && tal2 < tal3) {

    if (tal2 < tal3) {
        console.log(tal2 + " " + tal1 + " " + tal3)
    } else {
        console.log(tal2 + " " + tal3 + " " + tal1)
    }

} else if (tal3 < tal1 && tal3 < tal2) {
    
    if (tal1 < tal2) {
        console.log(tal3 + " " + tal1 + " " + tal2)
    } else {
        console.log(tal3 + " " + tal2 + " " + tal1)
    }

} else {
    console.log("Det är samma tal.")
}