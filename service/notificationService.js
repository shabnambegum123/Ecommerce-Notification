const notification = require("../Database/modal/notification");
const { statusCodes } = require("../response/httpStatusCode");
const { statusMessage } = require("../response/httpStatusMessage");
const { messages } = require("../response/customMessage");
const { generatePassword } = require("../Helpers/bcrypt");

const createNotificationService = async (params) => {
  try {
    let passData = {
      Name: params.Name,
      EmailId: params.EmailId,
      password: params.password,
      mobileNumber: params.mobileNumber,
      role: params.role,
      ProfileId: params.ProfileId,
      cartId: params.cartId,
    }

    passData.password = await generatePassword(params.password);

    let result = await profile.create(passData);

    if (result) {
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




module.exports = {createNotificationService}