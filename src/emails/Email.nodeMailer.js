import nodemailer from "nodemailer"

export const sendEmail = async(option)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "saefmsalah@gmail.com",
          pass: "btgs qnae axes pwlz",
        },
      });
    
       // send mail with defined transport object
       const info = await transporter.sendMail({
        from: '"Dev: Saef Mohamed 👻" <saefmsalah@gmail.com>', // sender address
        to: option.email, // list of receivers
        subject: "Hello ✔", // Subject line
       // text: "Hello world?", // plain text body
        html: "<h3>i hope you are fine</h3>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}