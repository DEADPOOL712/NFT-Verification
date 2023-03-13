const ethers = require("ethers");
const router = require("express").Router();

router.post("/", (rrq, res) => {
  res.send("SUCESS");
});

const decode = (key) => {
  const hash =
    "0x50b2c43fd39106bafbba0da34fc430e1f91e3c96ea2acee2bc34119f92b37750";
  const signMessage =
    "0x645cf8784f6d0ff9b714d75ae5eac3dacfc6f1ff2a7e42bf77f1e2823404c0a77a40916fa281df9daec77ce655c12fa1adefba67eddbe14066ea129034388c8e1b";
  const publicKey = ethers.recoverAddress(
    ethers.hashMessage(hash),
    signMessage
  );
  console.log(publicKey);
  const result = key === publicKey ? true : false;
  console.log(result);

  if (result) {
  }
};

const key = "0x85c3E62be3Fedc174b6DCc3F7c65e1b23eFA97EF";
decode(key);

module.exports = router;
