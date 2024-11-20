const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Us Message from ${name}`,
    text: `
            Message: ${message}
            \n\n
            From: ${name}
            \nEmail: ${email}
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Error sending email" });
    }
    console.log("Email sent: " + info.response);
    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
