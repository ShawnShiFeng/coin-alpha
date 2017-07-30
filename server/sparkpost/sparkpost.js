const SparkPost = require('sparkpost');
const moment = require('moment');

const sparky = new SparkPost('1dcf71fcfc0c7f575fa2369170e9f2455ceb4a81');

const sendMail = ({ msgs }) => {
  const template = msg => `<div>${moment(msg.timeStamp).format('LT')} <b>${msg.who}</b>: ${msg.message}</div>`;

  let sentences = '';
  msgs.forEach((msg) => {
    sentences += template(msg);
  });
  const imgUrl = 'http://www.tristatetechnology.com/blog/wp-content/uploads/2016/09/sparkpost1.png';
  const content = `<html><body><img src="${imgUrl}"/>${sentences}</body></html>`;

  const mail = {
    subject: `Chat History from ${moment(new Date()).format('LL')}`,
    content,
    recipients: [
      { address: 'carlol@gmail.com' },
      { address: 'yzhang1994@gmail.com' },
      { address: 'chowryan@gmail.com' },
      { address: 'karel.luwena@gmail.com' },
      { address: 'shawnsfeng@gmail.com' },
    ],
  };

  sparky.transmissions.send({
    options: {
      sandbox: false,
    },
    content: {
      from: 'no-reply@coinalpha.tech',
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
