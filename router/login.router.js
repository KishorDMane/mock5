const express = require("express")
const mongoose = require("mongoose");

const { SignupModel } = require("../model/signup.model")



const LoginRouter = express.Router()
LoginRouter.post("/", async (req,res) => {

    try {
        const { email, password } = req.body;
        // check user is present or not
        const user = await SignupModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                "msg": "invalid credentials"
            })
        } else {


            if (password == user.password) {
                res.status(201).json({
                    "login": "login succesfull"
                })
            } else {
                res.status(500).json({
                    "msg": "check email and password"
                })
            }



        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "msg":"internal server error"
        })
    }
})





module.exports={LoginRouter}