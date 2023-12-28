import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

config();

export const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'brightkyefoo@gmail.com',
    pass: process.env.GMAIL_PWD,
  },
});
