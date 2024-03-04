"use server"
import nodemailer from "nodemailer";
export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
//   const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail", // Specify Gmail host
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log(testResult);
  } catch (error) {
    console.error(error);
    // return;
  }

  try {
    const senResult = await transporter.sendMail({
      from : process.env.SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(senResult);
  } catch (error) {
    console.error(error);
  }
}
