const mongoose = require("mongoose")
const Customer = mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName:{
        type:String
    },
    password:{
        type:String
    },
    companyName :  {
        type:String
    },
    contractDuration :{
        type:Number
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    amount: {
        type: Number
    },
    status: {
      type: String
    },
    description : {
        type:String
    },
    ui_prgress : {
        type:Number
    },
    frontend_progress :{
        type:Number
    },
    backend_progress :{
        type:String
    },
    payedAmount: {
        type:Number
    },
    startDate : {
        type :String
    },
    endDate : {
        type:String
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Customer', Customer, 'Customer')