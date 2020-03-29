const express = require("express")

const router  = express.Router()
const LogEntry = require("../models/LogEntry")
router.get("/",async (req,res)=>{
   try{
       const entries = await LogEntry.find()
       res.json(entries)
   }catch(err){
       next(err)
   }
})

router.post("/",async(req,res,next)=>{
    try{
        const logEntry = new LogEntry(req.body)
        const createdEntry = await logEntry.save()
        res.json(createdEntry)
        
    }catch(error){
        next(error)
    }
   
    console.log(req.body)
})

module.exports = router