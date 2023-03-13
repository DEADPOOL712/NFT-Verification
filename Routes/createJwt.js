const router = require("express").Router();
const jwt = require("jsonwebtoken");
router.post("/", (req, res) => {
  //   const rawData = req.body.rawData;
  //   console.log(rawData);
  const rewArray = [
    {
      contractAdress: "0x1f8f2e94cfe82a31bb880d4ca212086737157ac7",
      tokenId: "1094",
      owner: "0x85c3e62be3fedc174b6dcc3f7c65e1b23efa97ef",
    },
    {
      contractAdress: "0x1f8f2e94cfe82a31bb880d4ca212086737157ac7",
      tokenId: "1094",
      owner: "0x85c3e62be3fedc174b6dcc3f7c65e1b23efa97ef",
    },
    {
      contractAdress: "0x1f8f2e94cfe82a31bb880d4ca212086737157ac7",
      tokenId: "1094",
      owner: "0x85c3e62be3fedc174b6dcc3f7c65e1b23efa97ef",
    },
  ];

  const jwtArray = rewArray.map((data) => {
    const secretKey = "12345";
    const token = jwt.sign(data, secretKey);
    return token;
  });
  console.log(jwtArray);
  res.send({ jwtArray });
});

module.exports = router;
