const {
    sendErrorResponse,
    sendSuccessResponse,
  } = require("../response/response");

  const {createNotificationService } = require("../service/notificationService")

  const createNotification = async (req, res) => {
    const params = req.body;
    const result = await createNotificationService(params);
    if (!result.status) {
      return sendErrorResponse(
        req,
        res,
        result?.statusCode,
        result?.message,
        result?.data
      );
    }
    return sendSuccessResponse(
      req,
      res,
      result?.statusCode,
      result?.message,
      result?.data
    )                                                                                                                                                                                                                                                                                
  };


  

  module.exports = {createNotification}