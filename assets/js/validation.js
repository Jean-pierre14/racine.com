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
    if (email !== '') {
        email.style.border = '1px solid green'
    } else {
        email.style.border = '1px solid red'
    }
}