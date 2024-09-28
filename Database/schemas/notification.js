const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  ProfileId:  mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now 
  },
  updatedAt: {
    type: Date,
    default: Date.now 
  },
    read: {
      type: Boolean,
      default: false 
    },
    title:{
      type:Array,
      default:[]
    },
    ProfileId:{
      type:mongoose.Schema.Types.ObjectId,
      default:null
    }

})

module.exports = notificationSchema



