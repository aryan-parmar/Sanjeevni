const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const Form = require("../../models/Form.model");

router.post("/form", authCheck, async (req, res, next) => {
  try {
    const { formFields, formNum } = req.body;
    console.log(formFields);
    let form = await Form.findOne({ userId: req.user.user_id });
    let b = {};
    b["userId"] = form.userId;
    b["formName"] = form.formName;
    b["form"] = form.form;
    b["createdAt"] = form.createdAt;
    b["updatedAt"] = Date.now();
    if (form) {
      await Form.deleteOne({ userId: req.user.user_id });
      b.formName[formNum] = true;
      let a = form.form || {};
      Object.assign(a, formFields);
      b["form"] = a;
      Form.create(b);
      res.status(200).json({ err: null, message: "Form Updated" });
    } else {
      res.status(404).json({ err: "Form Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
