const targetForm = document.getElementById("myForm")

const emailField = document.getElementById("email")
const countryField = document.getElementById("country")
const postalField = document.getElementById("postalCode")
const passField = document.getElementById("password")
const passConfirm = document.getElementById("confirm-pass")


const showWarning = (e) => {
    e.target.classList.add("warning")
    setTimeout(() => e.target.classList.remove("warning"), 500)
    switch (e.target.name) {
        default:
            console.log(e.target.name)
            break
        case "email":
            e.target.placeholder = "Please enter a valid email"
            break
        case "country":
            e.target.placeholder = "Please enter a Country"
            break
        case "postalCode":
            e.target.placeholder = "Please enter a Postal Code"
            break
        case "password":
            e.target.placeholder = "Please enter a Password"
            break
        case "confirm-pass":
            e.target.placeholder = "Please enter a Postal Code"
            break
    }

}


const addWarnings = () => {
    emailField.addEventListener("focusout", (e) => showWarning(e))
    countryField.addEventListener("focusout", (e) => showWarning(e))
    postalField.addEventListener("focusout", (e) => showWarning(e))
    passField.addEventListener("focusout", (e) => showWarning(e))
    passConfirm.addEventListener("focusout", (e) => showWarning(e))
}
addWarnings()

// Add live validation listeners here, that call the warnings if they fail