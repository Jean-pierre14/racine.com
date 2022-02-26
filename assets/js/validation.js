const Envoyer = document.getElementById('Btn-Submit'),
    email = document.querySelector('#email'),
    message = document.querySelector('#message'),
    Em = email.value,
    emailtext = Em.trim,
    msg = message.value,
    msgTxt = msg.trim


Envoyer.onclick = (e) => {
    e.preventDefault()
        // alert("Clicked") to check the event

    if (!emailtext) {
        alert("Alert")
    } else {
        alert("Good")
    }
}
email.onkeyup = () => {

    if (email.value.length <= 5) {
        email.style.border = '2px solid red'
    } else {
        email.style.border = '2px solid green'

    }
}

message.onkeyup = () => {
    if (message.value.length <= 5) {
        message.style.border = '2px solid red'
    } else {
        message.style.border = '2px solid green'
    }
}