const createVerificationEmail = (recipientEmail ,uid) => {
   const verificationLink = `${process.env.SERVER_URL}/user/verify/email/${uid}`;
 
   const mailOptions = {
     from: "sumitraghuwanshi7697@gmail.com",
     to: recipientEmail,
     subject: "Email Verification for campus connect",
     html: `<p><b>Verify your email</b></p>
            <p>Please click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>`
   };
 
   return mailOptions;
 };
 
 module.exports = createVerificationEmail;
 