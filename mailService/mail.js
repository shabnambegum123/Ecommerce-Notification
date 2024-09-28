const nodemailer = require("nodemailer");
const { statusCodes } = require("../response/httpStatusCode");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_USER ??  "galaxy08102001@gmail.com",
    pass: process.env.MAILER_PASSWORD ??  "qksk poco lxlr kggz",
  },
});

console.log("dwvqwd" ,process.env.MAILER_USER ,process.env.MAILER_PASSWORD )

const tirggerMail = async function ({ subject, html, to, attachments = [] }) {
  try {
    console.log("to----->", to);
    let mailObject = {
      to: to,
      html,
      subject,
      from: process.env.MAILER_USER,
    };

    if (attachments?.length > 0) mailObject.attachments = attachments;
    console.log("advaw", mailObject);
    const info = await transporter.sendMail(mailObject);

    console.log("Success Response--->", info.response);
 return { status: true , response: info.response };
  } catch (e) {
    console.log("advqadv", e);
    return { error: e, status: statusCodes.HTTP_INTERNAL_SERVER_ERROR };
  }
};

module.exports = tirggerMail;
