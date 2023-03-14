const router = require("express").Router();
const MyModel = require("../Model/model");

router.post("/", (req, res) => {
  const newDocument = new MyModel({
    uri: req.body.uri,
    size: req.body.size,
    title: req.body.title,
    price: req.body.price,
    contractaddress: req.body.contractaddress,
    deployeraddress: req.body.deployeraddress,
    coverUrl: req.body.coverUrl,
    nftUrl: req.body.nftUrl,
  });

  newDocument
    .save()
    .then((data) => {
      console.log("SAVE TO DB => ", data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ err: err });
    });
});

module.exports = router;
