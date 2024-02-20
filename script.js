'use strict'
let containerEmailInput = document.getElementById('containerEmailInput')
let containerSubscribeButton = document.getElementById('containerSubscribeButton')
let invalidEmailMessage = document.getElementById('invalidEmailMessage')

let successSubscribeSpan = document.getElementById('successSubscribeSpan');

if (containerEmailInput) {

    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    function validate(regex, str) {
        invalidEmailMessage.style.display = "none";
        if (!regex.test(str.value)) {
            invalidEmailMessage.style.display = "inline-block";
            str.focus();
            return false
        }
        return true
    }
    
    containerSubscribeButton.onclick = (e) => {
        e.preventDefault();
        containerSubscribeButton.blur();
        if (validate(emailPattern, containerEmailInput)) {
            window.location.href = 'success.html';
            localStorage.setItem('subscriberEmail', containerEmailInput.value)
        }  
    }
}

if (successSubscribeSpan) {
    let subscriberEmail = localStorage.getItem('subscriberEmail')
    console.log(subscriberEmail)
    successSubscribeSpan.innerText = subscriberEmail
}

