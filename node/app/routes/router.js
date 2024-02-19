const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.status(200).json({success:true, message:`${req.method} - request made`})
})


module.exports = router;