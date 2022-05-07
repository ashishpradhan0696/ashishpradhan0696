console.log("wrk")

const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;


Name.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let strName = Name.value;
    console.log(regex, strName);

    if (regex.test(strName)) {
        Name.classList.remove("is-invalid");
        validUser = true;
    }
    else {
        Name.classList.add("is-invalid");
        validUser = false;
    }
})

Email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let strEmail = Email.value;
    console.log(regex, strEmail);

    if (regex.test(strEmail)) {
        Email.classList.remove("is-invalid");
        validEmail = true;
    }

    else {
        Email.classList.add("is-invalid");
        validEmail = false;

    }

})

Phone.addEventListener("blur", () => {
    let regex = /^[0-9]{10}$/;
    let strPhone = Phone.value;
    console.log(regex, strPhone);

    if (regex.test(strPhone)) {
        Phone.classList.remove("is-invalid");
        validPhone = true;
    }
    else {
        Phone.classList.add("is-invalid");
        validPhone = false;
    }
})


let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();

    // if (validUser && validEmail && validPhone) {
    //     let success = document.getElementById("success");
    //     console.log("success")
    //     success.classList.add("show");
    //     failure.classList.remove("show");
    // }
    // else {
    //     let failure=document.getElementById("failure");
    //     console.log("failure")
    //     failure.classList.add("show");
    //     success.classList.remove("show");
    // }


    if (validUser && validEmail && validPhone) {
        let message = document.getElementById("message");
        message.innerHTML = `<strong class="alert-success">Success! Your request has been submitted </strong>`
    }
    else {
        let message = document.getElementById("message");
        message.innerHTML = `<strong class="alert-danger">Failure! Please try again </strong>`
    }
})