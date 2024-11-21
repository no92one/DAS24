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

    if (formData.firstname.value.trim().length >= 1
        && formData.lastname.value.trim().length >= 1
        && formData.email.value.trim().length >= 5
        && formData.email.value.trim().includes("@")
        && formData.email.value.trim().includes(".")
        && formData.age.value >= 18) {
        let newPerson = {
            firstname: formData.firstname.value,
            lastname: formData.lastname.value,
            email: formData.email.value,
            age: formData.age.value
        }
        
        formData.firstname.value = ""
        formData.lastname.value = ""
        formData.email.value = ""
        formData.age.value = ""

        personList.push(newPerson)
    } else if (formData.firstname.value.trim().length < 1
        && formData.lastname.value.trim().length >= 1
        && formData.email.value.trim().length >= 5
        && formData.email.value.trim().includes("@")
        && formData.email.value.trim().includes(".")
        && formData.age.value >= 18) {
        alert("firstname måste innehålla minst 1 karaktär!")
    } else if (formData.lastname.value.trim().length < 1
        && formData.lastname.value.trim().length >= 1
        && formData.email.value.trim().length >= 5
        && formData.email.value.trim().includes("@")
        && formData.email.value.trim().includes(".")
        && formData.age.value >= 18) {
        alert("lastname måste innehålla minst 1 karaktär!")
    } else if (formData.email.value.trim().match("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")
        && formData.age.value >= 18
        && formData.firstname.value.trim().length >= 1
        && formData.lastname.value.trim().length >= 1
    ) {
        alert("email")
    } else if (formData.age.value < 18
        && formData.firstname.value.trim().length >= 1
        && formData.lastname.value.trim().length >= 1
        && formData.email.value.trim().length >= 5
        && formData.email.value.trim().includes("@")
        && formData.email.value.trim().includes(".")
    ) {
        alert("age")
    } else {
        alert("firstname, lastname, email och age")
    }


})


let printUsersButton = document.getElementById("printUsersBtn")

printUsersButton.addEventListener("click", () => {
    for (let i = 0; i < personList.length; i++) {
        console.log(personList[i])
    }
})
