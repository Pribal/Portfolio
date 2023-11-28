const nom = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const sendButton = document.getElementById("sendButton")

function emptyChamps()
{
    nom.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
}

sendButton.addEventListener('click', () => {
    if(!nom.value || !email.value || !subject.value || !message.value)
    {
        swal.fire({
            title: "Oops...",
            text: "it looks like one or more fields have been left blank. Please fill in all fields.",
            icon: "error"
        })
    }
    else
    {
        let body = "Email: "+email.value+ "\n Nom: "+nom.value+"\n Object: "+subject.value+"\n\n "+message.value;
        fetch('https://ntfy.sh/portfolio_contact', {
            method: 'POST', 
            body: body,
            headers: {
                'Title': 'Nouveau contact sur le portfolio.',
                'Tags': 'envelope_with_arrow'
            }
        })
        emptyChamps();
        swal.fire({
            icon: "success",
            title: "Your message has been sent!",
            text: "I received your message. I will get back to you as soon as possible."
        })
    }
})