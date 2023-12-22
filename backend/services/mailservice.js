const nodemailer = require('nodemailer');
const createVerificationEmail = require('./verifymail');

let transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.AUTH_EMAIL,
        pass : process.env.AUTH_PASS
    },
    host: 'smtp.gmail.com',
    port: 465
});

//function to send email
const sendMail = (email,uid) =>{
     
    transporter.sendMail(createVerificationEmail(email,uid))
    .then(()=>console.log("Email Sent for verification"))
    .catch((error)=>console.log("An Error occurred while sending email for verification"));
};

module.exports = sendMail;