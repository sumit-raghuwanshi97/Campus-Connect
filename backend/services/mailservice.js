const nodemailer = require('nodemailer');

//nodemailer stuff
let transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.AUTH_EMAIL,
        pass : process.env.AUTH_PASS,
    },
    host: 'smtp.gmail.com',
    port: 465
});

//function to send email
const sendMail = () =>{

    const mailOptions ={
        from :"sumitraghuwanshi7697@gmail.com",
        to:"sumitraghuwanshi7697@gmail.com",
        subject :"Testing campus connect",
        html : "<b>Mail for testing</b>",
    }

    transporter.sendMail(mailOptions , (error) => {

        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent');
        }

    });
};


module.exports = sendMail;