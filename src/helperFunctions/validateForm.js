const validateForm = (form) => {
    let EMAIL_VALIDATOR =
        /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    const PASSWORD_VALIDATOR =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    // console.log(EMAIL_VALIDATOR.test(form.email))
    // console.log(PASSWORD_VALIDATOR.test(form.password))

    if (form.email !== '' && !EMAIL_VALIDATOR.test(form.email)) {
        alert('Please provide a valid email')
        return false
    }

    if (form.password !== '' && !PASSWORD_VALIDATOR.test(form.password)) {
        alert('Please provide a valid password')
        return false
    }

    return true
}

export default validateForm
