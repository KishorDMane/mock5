const express = require("express")
const mongoose = require("mongoose");

const { FlightModel } = require("../model/Flight.model")



const flightRouter = express.Router()
flightRouter.get("/", async (req,res) => {
    const id=req.params.id
    const flight = await FlightModel.find({});
res.status(200).json({
    flight
})

})
flightRouter.get("/:id", async (req,res) => {
    const _id=req.params.id
    const flight = await FlightModel.findOne({_id});
res.status(200).json({
    flight
})

})

flightRouter.post("/", async (req,res) => {

try{let payloade=req.body;

await FlightModel.insertMany(payloade);
res.status(200).json({
    payloade
})
}catch(err){
    console.log(err)
    res.status(500).json({
        "msg":"server error"
    })
}




})

flightRouter.patch("/:id", async (req,res) => {

    try{let payloade=req.body;
        _id=req.params.id
    
    await FlightModel.findByIdAndUpdate(_id,payloade,{new:true});
    res.status(200).json({
        payloade
    })
    }catch(err){
        console.log(err)
        res.status(500).json({
            "msg":"server error"
        })
    }
    
    
    
    
    })
    flightRouter.delete("/:id", async (req,res) => {

        try{let _id=req.params.id;
        
        await FlightModel.findByIdAndDelete({_id});
        res.status(200).json({
            "msg":"deleted"
        })
        }catch(err){
            console.log(err)
            res.status(500).json({
                "msg":"server error"
            })
        }
        
        
        
        
        })
module.exports={flightRouter}