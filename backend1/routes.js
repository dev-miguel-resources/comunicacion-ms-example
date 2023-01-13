const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/message", async (req, res) => {
  const messages = {
    msg01: "Hello from backend1",
    msg02: "",
  };

  const path =
    process.env.SERVICE_BACKEND2 || "http://localhost:19020/api/message";

  const response = await axios.get(path);
  messages.msg02 = response.data.message;

  res.json(messages);
});

module.exports = router;
