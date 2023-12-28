import { apiEmail } from '../../constants/mail/apiEmail';
import { SmallMailOptions } from '../../types/mails';
import { transporter } from './mailing.config';
import * as SibApiV3Sdk from '@getbrevo/brevo';

// const send = (mailOptions: SmallMailOptions) => {
//   const mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
//   };
// transporter.sendMail(
//   { from: apiEmail, ...mailOptions },
//   function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   }
// );

// };

const send = (mailOptions: SmallMailOptions) => {
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  apiInstance.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY || ''
  );

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = mailOptions.subject;
  sendSmtpEmail.htmlContent = mailOptions.text;
  sendSmtpEmail.sender = {
    name: 'Achille',
    email: 'accueil@chillo.tech',
  };
  sendSmtpEmail.to = [{ email: mailOptions.to }];
  sendSmtpEmail.replyTo = {
    email: 'accueil@chillo.tech',
    name: 'Achille de chillo.tech',
  };
  sendSmtpEmail.params = {
    parameter: 'My param value',
    subject: 'New Subject',
  };
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log('API called successfully.');
    },
    function (error) {
      console.error(error);
    }
  );
};

const mailingService = {
  send,
};

export default mailingService;
