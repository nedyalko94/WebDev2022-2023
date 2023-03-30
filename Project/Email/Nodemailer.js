const nodemailer = require("nodemailer");

const SendEmail = async(subject,html,text)=>{
    try {
        let transporter = nodemailer.createTransport({
            service:process.env.SERVICE,
            host: process.env.HOST,
            port: 587,
            secure: false, 
            auth: {
              user: process.env.TRANSPORTER_EMAIL, //  user
              pass: process.env.TRANSPORTER_PASSWORD, //  password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: process.env.TRANSPORTER_EMAIL, // sender address
            to: process.env.RECEIVERS, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html, // html body // 
          }); 
        
          console.log("Message sent: %s", info.messageId); 
    } catch (error) {
        console.log('error fail to send Email',error)
        
    }


     
    }
    
      


// SendEmail().catch(console.error);

module.exports = {SendEmail}

