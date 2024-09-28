
const mongoose = require("mongoose");
const notificationSchema = require("../schemas/notification");

const notification = mongoose.model("notification", notificationSchema);

module.exports = notification;

