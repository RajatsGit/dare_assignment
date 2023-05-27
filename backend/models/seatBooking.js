const mongoose = require("mongoose");

const seatBookingSchema = new mongoose.Schema({
    seatNumber:{
        type:Number,
        required:true
    },

    isBooked:{
        type:Boolean,
        default:false,
        required:true,
    }

})

const seatBookingModel = mongoose.model("seatBooking",seatBookingSchema)

 

module.exports = seatBookingModel;