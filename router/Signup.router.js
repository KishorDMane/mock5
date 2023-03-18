const express=require("express")
const mongoose=require("mongoose");

const {SignupModel}=require("../model/signup.model")



const signupRouter=express.Router()  

signupRouter.post("/",async(req,res)=>{ 
 
console.log(req.body)
    try{
        const {name,email,password}=req.body;
//check user present or not
const useExist=await SignupModel.findOne({email});
if(useExist){

    return res.status(400).json({"msg":"user already exisist"})

}else{
    const user= new SignupModel({
        name,email,password
    })
    await user.save();
    res.status(201).json(user)
}



    }catch(err){
        console.log(err)
        res.status(500).json({
            "msg":"server error"
        }) 
    }
})

module.exports={signupRouter}

