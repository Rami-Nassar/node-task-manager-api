const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'souls.incog@gmail.com',
        subject: 'Thanks for joining!',
        text: 'Welcome to the app, ' + name + '. Let me know how you get along with the app.'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'souls.incog@gmail.com',
        subject: 'Sorry to see you go!',
        text: 'Goodbye, ' + name + '. Hope to see you again.'
    })
}

// const msg = {
//     to: 'souls.incog@gmail.com',
//     from: 'souls.incog@gmail.com',
//     subject: 'This is my first creation!',
//     text: "I hope this one actually gets to you."
// }

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

  module.exports = {
      sendWelcomeEmail,
      sendCancelationEmail
  }