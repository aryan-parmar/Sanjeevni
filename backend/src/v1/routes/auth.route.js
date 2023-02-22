const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const User = require("../../models/User.model");
const Form = require("../../models/Form.model");

const accountSid = "AC65523e31bbdbe4cb97d58c1a97944705";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VAe077af1f7bf39f70809e510d95730a89";
const client = require("twilio")(accountSid, authToken);

router.post("/signup", async (req, res, next) => {
  try {
    const { Aadhar, Phone, Username, Password } = req.body;
    console.log(Aadhar, Phone, Username, Password);
    if (!(Aadhar && Phone && Password && Username)) {
      return res.status(400).json({ err: "All input is required" });
    }
    let oldUser = await User.findOne({ Phone });
    if (oldUser) {
      return res.status(409).json({ err: "User Already Exist. Please Login" });
    }
    oldUser = await User.findOne({ Aadhar });
    if (oldUser) {
      return res.status(409).json({ err: "User Already Exist. Please Login" });
    }
    let encryptedPassword = await bcrypt.hash(Password, 10);
    const user = await User.create({
      Aadhar: Aadhar,
      Username,
      Phone: Phone,
      Password: encryptedPassword,
    });
    const FormId = await Form.create({ userId: user._id });
    user.FormId = FormId._id;
    const token = jwt.sign(
      { user_id: user._id, Phone },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    client.verify.v2
      .services(verifySid)
      .verifications.create({
        to: `+91${Phone}`,
        channel: "sms",
        friendlyName: "sanjeevni",
      })
      .then((verification) => console.log(verification.status));
    user.token = token;
    user.save();
    var date = new Date();
    date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
      httpOnly: true,
    });

    res.status(201).json({ err: null });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
});

router.post("/verify", async (req, res, next) => {
  let { Phone, code } = req.body;
  client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to: `+91${Phone}`, code: code })
    .then((verification_check) => {
      console.log(verification_check.status);
      if (verification_check.status === "approved") {
        User.findOneAndUpdate(
          { Phone: Phone },
          { Verified: true },
          (err, doc) => {
            if (err) {
              console.log(err);
            }
          }
        );
        res.status(200).json({ err: null });
      }
    });
});

router.post("/2fa", async (req, res, next) => {
  try {
    let { Phone, code } = req.body;
    client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: `+91${Phone}`, code: code })
      .then(async (verification_check) => {
        if (verification_check.status === "approved") {
          const user = await User.findOne({ Phone: Phone });
          const token = jwt.sign(
            { user_id: user._id, Phone },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          user.token = token;
          user.save();
          var date = new Date();
          date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
          res.cookie("token", token, {
            expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
            httpOnly: true,
          });
          res.status(201).json({ err: null, role: user.Role });
        }
      });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { Phone, Password } = req.body;
    console.log(Phone, Password);
    if (!(Phone && Password)) {
      return res.status(400).json({ err: "All input is required" });
    }
    const user = await User.findOne({ Phone: Phone });
    if (!user) {
      return res.status(401).json({ err: "Invalid Phone" });
    }
    const isPasswordMatch = await bcrypt.compare(Password, user.Password);
    if (!isPasswordMatch) {
      return res.status(401).json({ err: "Invalid Password" });
    } else {
      client.verify.v2
        .services(verifySid)
        .verifications.create({
          to: `+91${Phone}`,
          channel: "sms",
          friendlyName: "sanjeevni",
        })
        .then((verification) => console.log(verification.status));
      res.status(201).json({ err: null, role: user.Role });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post("/ministry/login", async (req, res, next) => {
  try {
    const { Username, Password } = req.body;
    console.log(Username, Password);
    if (!(Username && Password)) {
      return res.status(400).json({ err: "All input is required" });
    }
    const user = await User.findOne({ Username: Username });
    if (!user) {
      return res.status(401).json({ err: "Invalid Username" });
    }
    const isPasswordMatch = await bcrypt.compare(Password, user.Password);
    if (!isPasswordMatch) {
      return res.status(401).json({ err: "Invalid Password" });
    } else {
      if (user.Role === "ministry") {
        const token = jwt.sign(
          { user_id: user._id, Username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        user.token = token;
        user.save();
        var date = new Date();
        date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
        res.cookie("token", token, {
          expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
          httpOnly: true,
        });
        res.status(201).json({ err: null, role: user.Role });
      } else {
        res.status(403).json({ err: "invalid" });
      }
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post("/logincheck", authCheck, async (req, res, next) => {
  res.status(200).json({ err: null, user: req.user });
});
module.exports = router;
