const express = require("express");
const app = express();

app.use(express.json());

app.post("/send-otp", (req, res) => {
  const { phone } = req.body;

  // Call SMS API here
  console.log("Sending OTP to:", phone);

  res.send("OTP sent");
});

app.listen(5000);