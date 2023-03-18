const express = require("express")
const mongoose = require("mongoose");

const { BookingModel } = require("../model/booking.model")
const { FlightModel } = require("../model/Flight.model")
const {SignupModel}=require("../model/signup.model")



const dashboardRouter = express.Router()
dashboardRouter.get("/", async (req, res) => {
    
    const flight = await BookingModel.find()
    .populate("user",'email name _id')
    .populate('flight');
   
    res.status(200).json({
        flight
    })

})

module.exports = { dashboardRouter }