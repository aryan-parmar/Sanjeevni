const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const Form = require("../../models/Form.model");

router.post("/form", authCheck, async (req, res, next) => {
  try {
    const { formNum, formFields, formResponses } = req.body;
    const form = await Form.findOne({userId: req.user.user_id});
    if (form) {
      formFields.forEach((field, index) => {
        form.formFields.push(field);
        form.formResponses.push(formResponses[index]);
      });
      form.formUpdatedAt = Date.now();
      form.formName[formNum] = true;
      form.save();
      res.status(200).json({ err: null, message: "Form Updated" });
    } else {
      res.status(404).json({ err: "Form Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});
