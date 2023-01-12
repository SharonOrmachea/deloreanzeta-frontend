import * as nodemailer from "nodemailer";
import * as config from "./config"

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "lopezaxelsec@gmail.com", // generated ethereal user
      pass: "kntfkznmyvzomgrr", // generated ethereal password
    },
  });

  transporter.verify().then(() => {
    console.log("Ready for send emails");
  });