document.getElementById("submit-btn").addEventListener('click', function () {
    const inputField = document.getElementById("input-field");
    const passwordField = document.getElementById("password-field");
    const input = inputField.value;
    const password = passwordField.value;
    // console.log(input, password)
    if (input === 'sontan' && password === '123') {
        window.location.href = "bank.html"
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Toi PassWord Boilla Gecis!!!!',
            text: 'Tore ami teiggo korlam!!!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    inputField.value = ''
    passwordField.value = ''

})