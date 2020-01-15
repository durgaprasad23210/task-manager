const sgMail = require('@sendgrid/mail')
const config = require('config')


sgMail.setApiKey(config.get('sendgridAPIKey'))

const sendWelcomeMail = (options) => {
    options = {
        ...options
    }
    sgMail.send({
        to: options.to || 'durgaprasad23211@gmail.com',
        from: options.from || 'durgaprasad23211@gmail.com',
        subject: options.subject || 'Thanks for joining in',
        text: options.text || 'Welcome to the app, google.  Let me know how you get along with the app.',
        html: '<h1>hello world</h1>'
    })
}

const sendCancellationMail = (options) => {
    options = {
        ...options
    }
    sgMail.send({
        to: options.to || 'durgaprasad23211@gmail.com',
        from: options.from || 'durgaprasad23211@gmail.com',
        subject: options.subject || 'See you again!!!',
        text: options.text || 'Welcome to the app, google.  Let me know how you get along with the app.',
        html: '<h1>Get back us asap.</h1>'
    })
}

exports.sendWelcomeMail = sendWelcomeMail
exports.sendCancellationMail = sendCancellationMail