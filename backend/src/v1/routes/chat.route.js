const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/chatbot", authCheck, async (req, res, next) => {
  let { msg } = req.body;
  if (!msg) return res.status(400).json({ err: "Message not found" });
  try{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You: ${msg}\n bharti:`,
        temperature: 0.9,
        max_tokens: 50,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
      res.status(200).json({
        err: null,
        out: response.data.choices[0].text.trim(4,-1),
      });
      console.log(response.data);
  }catch(err){
      console.log(err);
  }
});

module.exports = router;