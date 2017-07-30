const SparkPost = require('sparkpost');
const sparky = new SparkPost('1dcf71fcfc0c7f575fa2369170e9f2455ceb4a81');



const sendMail = () => {
  const mail = {
    subject: 'test mail',
    content: '<html><body><p>this is a testing message</p></body></html>',
    recipients: [
      // { address: 'carlol@gmail.com' },
      // { address: 'yzhang1994@gmail.com' },
      // { address: 'chowryan@gmail.com' },
      // { address: 'karel.luwena@gmail.com' },
      { address: 'shawnsfeng@gmail.com' },
    ],
  };

  sparky.transmissions.send({
    options: {
      sandbox: true,
    },
    content: {
      from: 'shawnsfeng@gmail.com',
      subject: mail.subject,
      html: mail.content,
    },
    recipients: mail.recipients,
  })
  .then((data) => {
    console.log('you have succesffully sent mails to the recipients! ', data);
  })
  .catch((err) => {
    console.error('failed to send mails to the recipients! ', err);
  });
};

module.exports.sendMail = sendMail;
