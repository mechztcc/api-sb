import nodemailer from 'nodemailer';

interface IMailContact {
  name: string;
  email: string;
}

interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
}

export class EtherealMail {
  static async sendEmail({ to, from, subject }: ISendMail): Promise<void> {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    let message = await transporter.sendMail({
      from: 'equipe@email.com', // sender address
      to: { name: to.name, address: to.email }, // list of receivers
      subject: subject, // Subject line
      html: '<b>Hello world?</b>', // html body
    });
    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
