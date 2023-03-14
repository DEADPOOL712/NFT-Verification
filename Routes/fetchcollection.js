const router = require("express").Router();
const MyModel = require("../Model/model"); // replace with the path to your model file

router.get("/", (req, res) => {
  async function getAllDocuments() {
    try {
      const documents = await MyModel.find({}); // find all documents in the collection
      console.log(documents); // log the documents to the console
      res.send(documents);
    } catch (err) {
      console.error(err);
    }
  }
  getAllDocuments();
});

module.exports = router;
