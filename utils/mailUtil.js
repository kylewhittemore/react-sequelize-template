const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a72fb92d264e38',
    pass: 'ab21482d769203',
  },
});
const mailUtil = {
  sendCode(code, email) {
    const mailOptions = {
      from: 'sender@appname.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: `${code}\n`,
      html: `<p>${code}</p><p><a href="http://localhost:3000/verify">Verify email</a></p>`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  },
};

module.exports = mailUtil;
