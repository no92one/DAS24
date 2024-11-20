let input = document.getElementsByName("firstname")
let personList = []

// console.log(input)

let formButton = document.getElementById("formBtn")

formButton.addEventListener("click", () => {
    // console.log("Du klicka på knappen!")

    let formData = document.querySelector("form").elements
    // console.log(formData.firstname.value)
    // console.log(formData.lastname.value)
    // console.log(formData.email.value)
    // console.log(formData.age.value)

    let newPerson = {
        firstname: formData.firstname.value,
        lastname: formData.lastname.value,
        email: formData.email.value,
        age: formData.age.value
    }

    personList.push(newPerson)
})


let printUsersButton = document.getElementById("printUsersBtn")

printUsersButton.addEventListener("click", () => {
    for (let i = 0; i < personList.length; i++) {
        console.log(personList[i])
    }
})
