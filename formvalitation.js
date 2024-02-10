const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const password2 = document.getElementById("Password2");


// String.prototype.isemail =function() {

//     return !!this.match(/^\W+@[a-zA-Z]+?)
// }





function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            errorInput(input, `${getName(input)} is Required`);
        } else {
            successInput(input);
        }
    });

}

function getName(input) {
    return input.id;
}

function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
}

function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
}

function checkLength(input, min, max) {
    const value = input.value.trim();
    if (value.length < min || value.length > max) {
        errorInput(input, `${getName(input)} must be between ${min} and ${max} characters`);
    } else {
        successInput(input);
    }
}

// function checkemail(input){
//     if(!input.value.trim().isemail()){
//         errorInput(input,"Invalid Email Address")
//     }
// }


function checkconfirmpassword(password, password2) {
    if (password.value !== password2.value) {
        errorInput(password2, `${getName(password2)} does not match`);
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 10);
    checkLength(password, 5, 10);
    checkconfirmpassword(password, password2);
    // checkemail(email);
});






