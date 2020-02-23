const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a72fb92d264e38',
    pass: 'ab21482d769203',
  },
});

const mailOptions = {
  from: 'sender@appname.com',
  to: 'recipient@customer.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
