import * as SibApiV3Sdk from '@getbrevo/brevo';
import { SmallMailOptions } from '../../types/mails';

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
