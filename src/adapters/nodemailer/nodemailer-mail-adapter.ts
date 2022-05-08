import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9ea3f46380716f",
    pass: "4adafaf19d2e3e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
     from: 'Equipe Feedget <oi@feedget.com>',
     to: 'Eduardo Avelino <avelino.edu@gmail.com>',
     subject,
     html: body,
    });
  }
}