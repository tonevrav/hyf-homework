const recepients = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";

// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
    // But really it only logs out a string
    console.log('email sent to ' + recepient);
}

const anArray = recepients.split("|");

for(let i = 0; i < anArray.length; i++) {
    sendEmailTo(anArray[i]);
}