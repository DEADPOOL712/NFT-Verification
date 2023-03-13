const router = require("express").Router();

// verify route give token in body
router.post("/", (req, res) => {
  const token = req.body.token;
  console.log("token : ", token);
  res.send("Verify ROUTE");
});
module.exports = router;
