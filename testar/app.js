const button = document.getElementById("submitButton");

button.addEventListener("click", () => {

    const form = document.getElementById("myForm");

    console.dir(form)
    console.log(form.elements)

    const formData = {};
    for (let input of form.elements) {
        if (input.name) {
            formData[input.name] = input.value;
        }
    }
    console.log("Formulärdata:", formData);
});