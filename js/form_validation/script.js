const formEl = document.getElementById('form')
formEl.addEventListener('submit', (event) =>{
    event.preventDefault()
    const message = []
    const name = document.getElementById('name-input').value
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value

    if (name.trim.length === 0){
        message.push('name should be filled')
    }
    else if (!name.match(/^[a-zA-Z ]*$/)) {
        message.push('name should be letters');
    }

    if (!email.match(/^[^@]*@[a-z]*\.com$/)) {
        message.push('Invalid email format');
    }

    if (password.length <=8){
        message.push('Password should be more than 8 characters')
    }
    else if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/) || !password.match(/[\W_]/) ) {
        message.push('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    }
    
    if (message.length > 0) {
        alert(message.join('\n'));
    } else {
        alert('Form submitted successfully!');
    }
})