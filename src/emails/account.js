const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'asadcse247@gmail.com',
        subject: 'Welcome: Task-Manager',
        text: `welcome to the Task-Manager app, ${name}. The simple task managing jus got way more advance.`
    })
}

const sendGoodbyeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'asadcse247@gmail.com',
        subject: 'Goodbye: Task-Manager',
        text: `We hope we boh have a nice time together, ${name}. We will wait, let us know when you're joinning back`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}