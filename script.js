const content = document.getElementById("content")
const targetForm = document.getElementById("myForm")

const emailField = document.getElementById("email")
const countryField = document.getElementById("country")
const postalField = document.getElementById("postalCode")
const passField = document.getElementById("password")
const passConfirm = document.getElementById("confirm-pass")


const passWarn = () => {
    let warning = document.createElement("p")
    warning.classList.add("passWarn")
    warning.textContent = "Pass must be 8 characters including 1 uppercase letter, 1 lowercase letter and numeric characters"
    return warning
}

const testEmail = (value) => {
    let emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPat.test(value)
}

const testPass = (value) => {
    let passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return passValid.test(value)
}

const showWarning = (e) => {
    e.target.classList.add("warning")
    setTimeout(() => e.target.classList.remove("warning"), 500)
}

const addWarnings = () => {
    //TODO: show warning should actually be validate form, THEN show warning
    emailField.addEventListener("blur", (e) => validateInput(e))
    countryField.addEventListener("blur", (e) => validateInput(e))
    postalField.addEventListener("blur", (e) => validateInput(e))
    passField.addEventListener("blur", (e) => validateInput(e))
    passConfirm.addEventListener("blur", (e) => validateInput(e))
}
addWarnings()

const validateInput = (e) => {
    let password = passField.value

    switch (e.target.name) {
        default:
        case "":
            e.target.placeholder = `Please enter a ${e.target.name}`
            showWarning(e)
            break
        case "email":
            if (!testEmail(e.target.value)) {
                e.target.value = ""
                e.target.placeholder = "Use format: email@company.com"
                break
            }
            break
        case "password":
            if (!testPass(e.target.value)) {
                e.target.value = ""
                e.target.parentElement.appendChild(passWarn())
            }
            break
        case "confirm-pass":
            if (e.target.value !== password) {
                e.target.value = ""
                e.target.placeholder = "Passwords do not match"
            }
            break
    }
}


const displaySuccess = () => {
    let popup = document.createElement("div")
    popup.classList.add("popup-banner")
    popup.textContent = "Congratulations: \n Successful Submit!"
    content.appendChild(popup)
}

targetForm.addEventListener("submit", (e) => {
    e.preventDefault()
    displaySuccess()
})