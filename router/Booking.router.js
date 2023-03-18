const express = require("express")
const mongoose = require("mongoose");

const { BookingModel } = require("../model/booking.model")
const { FlightModel } = require("../model/Flight.model")
const {SignupModel}=require("../model/signup.model")



const BookingRouter = express.Router()
BookingRouter.get("/", async (req, res) => {
    
    const flight = await BookingModel.find()
    .populate("user",'email name _id')
    .populate('flight');
   
    res.status(200).json({
        flight
    })

})


BookingRouter.post("/", async (req, res) => {

    try {
      const user=await SignupModel.findOne();
      const flight=await FlightModel.findOne();

      const newBooking=new BookingModel({
        user: user._id,
        flight:flight._id
      })
      const saveBooking=await newBooking.save();

      res.send("booking created")
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "msg": "server error"
        })
    }




})

BookingRouter.patch("/:id", async (req, res) => {

    try {
        let payloade = req.body;
        _id = req.params.id

        await BookingModel.findByIdAndUpdate(_id, payloade, { new: true });
        res.status(200).json({
            payloade
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "msg": "server error"
        })
    }




})
BookingRouter.delete("/:id", async (req, res) => {

    try {
        let _id = req.params.id;

        await BookingModel.findByIdAndDelete({ _id });
        res.status(200).json({
            "msg": "deleted"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "msg": "server error"
        })
    }




})
module.exports = { BookingRouter }