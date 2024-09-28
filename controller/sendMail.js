const { sendMailService } = require("../service/sendMailService");
const {
  sendErrorResponse,
  sendSuccessResponse,
} = require("../response/response");

const sendMail = async (req, res) => {
 const params = req.body.data
  const result = await sendMailService(params);
  console.log("dfsaerg" ,result)
  if (!result.status) {
    return sendErrorResponse(
      req,
      res,
      result?.statusCode ??  200,
      result?.message,
      result?.data
    );
  }
  return sendSuccessResponse(
    req,
    res,
    result?.statusCode ?? 500,
    result?.message,
    result?.data
  );
};

module.exports = { sendMail };
