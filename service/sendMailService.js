const { statusCodes } = require("../response/httpStatusCode");
const { statusMessage } = require("../response/httpStatusMessage");
const { messages } = require("../response/customMessage");
const emailTemplate = require("../utils/emailTemplate");
const tirggerMail = require("../mailService/mail");

const sendMailService = async (params) => {
  try {
    console.log("params", params);
    let mailData = {};
    let emailTemplateFunc = emailTemplate[params.type];

    if (emailTemplateFunc) {
      const [subject, html] = emailTemplateFunc(params);
      mailData = {
        html,
        subject,
        to: params.emailId,
      };

      if (params.attachments) mailData.attachments = params.attachments;
      console.log("mailData------->", JSON.stringify(mailData));
      return tirggerMail(mailData);
    }
    if (send) {
      return {
        status: true,
        statusCode: statusCodes?.HTTP_OK,
        message: messages?.createProfile,
        data: result,
      };
    } else {
      return {
        status: false,
        statusCode: statusCodes?.HTTP_BAD_REQUEST,
        message: messages?.Error,
        data: [],
      };
    }
  } catch (error) {
    return {
      status: false,
      statusCode: statusCodes?.HTTP_BAD_REQUEST,
      message: error.message,
    };
  }
};

module.exports = { sendMailService };
