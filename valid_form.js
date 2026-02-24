
form.addEventListener('submit',e=>{
    e.preventDefault()
    if(!email.value || !password.value)
    {
        MessageChannel.textContent="Please fill in all fields"
    }
    else
    {
        MessageChannel.textContent="Form submitted successfully!"
    }
})