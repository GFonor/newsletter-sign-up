let containerEmailInput = document.getElementById('containerEmailInput')
let containerSubscribeButton = document.getElementById('containerSubscribeButton')
let invalidEmailMessage = document.getElementById('invalidEmailMessage')

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



function validate(regex, str) {
    invalidEmailMessage.style.display = "none";
    if (!regex.test(str)) {
        invalidEmailMessage.style.display = "inline-block";
    }
}

containerSubscribeButton.onclick = (e) => {
    e.preventDefault();
    validate(emailPattern, containerEmailInput.value);
}