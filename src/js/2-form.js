let formData = {
    email: "",
    message: "" 
}

const customStyle = document.createElement('style');
        customStyle.textContent = `
            .feedback-form {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 24px;
                width: 408px;
            }
            label {
                font-family: "Montserrat", sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.5;
                letter-spacing: 0.04em;
                color: #2e2f42;
                display: flex;
                flex-direction: column;
            }
            button {
                color: #FFF;
                background-color: #4e75ff;
                border: none;
                border-radius: 8px;
                padding: 8px 16px;
                width: 95px;
                height: 40px;
                }
        `;

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