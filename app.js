const express = require("express");
const app = express();
const VerifyRoutes = require("./Routes/verify");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/verify", VerifyRoutes);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(3000, () => {
  console.log("Server is live !");
});
