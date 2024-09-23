import"./assets/styles-DzUhCamZ.js";let e={email:"",message:""};const a=document.createElement("style");a.textContent=`
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
        `;document.head.appendChild(a);localStorage.getItem("feedback-form-state")&&(e=JSON.parse(localStorage.getItem("feedback-form-state")),document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message);document.querySelector(".feedback-form").addEventListener("input",function(t){t.target.matches('input[name="email"]')&&(e.email=t.target.value),t.target.matches('textarea[name="message"]')&&(e.message=t.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.querySelector(".feedback-form").addEventListener("submit",function(t){t.preventDefault(),e.email.trim()===""||e.message.trim()===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value="")});
//# sourceMappingURL=2-form.js.map
