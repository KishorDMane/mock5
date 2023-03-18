const express=require("express")
const mongoose=require("mongoose");



app=express() 


const {connection}=require("./config/db")
const {signupRouter}=require("./router/Signup.router")
const {LoginRouter}=require("./router/login.router")
const {flightRouter}=require("./router/flight.router")
const {BookingRouter}=require("./router/Booking.router")
const {dashboardRouter}=require("./router/dashborde.router")
app.use(express.json())
app.get("/server",(req,res)=>{
    res.send("server is wirking")
})
app.use("/api/register",signupRouter)
app.use("/api/login",LoginRouter)
app.use("/api/flights",flightRouter)
app.use("/api/booking",BookingRouter)
app.use("/api/dashboard",dashboardRouter)
app.listen(8000,async()=>{
    await connection;
    console.log("8000 is started")
})