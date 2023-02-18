const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const Form = require("../../models/Form.model");

router.post("/formdata", authCheck, async (req, res, next) => {
    try{
        if(req.user){
            Form.findOne({userId: req.user.user_id}, (err, form) => {
                if(err){
                    res.status(500).json({err: err});
                }
                if(form){
                    res.status(200).json({err: null, data: form.formName});
                }else{
                    res.status(404).json({err: "Form Not Found"});
                }
            })
        }
    }catch(err){
        res.status(500).json({err: err});
    }
});

module.exports = router;