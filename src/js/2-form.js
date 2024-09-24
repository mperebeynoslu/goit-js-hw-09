let formData = {
    email: "",
    message: "" 
}

const customStyle = document.createElement('style');

document.head.appendChild(customStyle);

if (localStorage.getItem("feedback-form-state")) {
    formData = JSON.parse(localStorage.getItem("feedback-form-state"));
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
}

document.querySelector('.feedback-form').addEventListener('input', function(event) {
    if (event.target.matches('input[name="email"]')) {
        formData.email = event.target.value;
    }
    if (event.target.matches('textarea[name="message"]')) {
        formData.message = event.target.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData = { email: "", message: "" };
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";
    }
});