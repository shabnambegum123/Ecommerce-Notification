const router = require("express").Router();
const { routes } = require("../routes/endPoint");

const {createNotification} = require("../controller/notificationController")
const {sendMail} = require("../controller/sendMail")



router.post(routes.v1.notification.CreateNotification, createNotification)
router.post("/forget/password",sendMail)

module.exports = router