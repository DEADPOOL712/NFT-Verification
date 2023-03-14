const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new mongoose.Schema({
  uri: { type: String, required: true },
  size: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  contractaddress: { type: String, required: true },
  deployeraddress: { type: String, required: true },
  coverUrl: { type: String, required: true },
  nftUrl: { type: String, require: true },
});

const MyModel = mongoose.model("MyModel", mySchema);

module.exports = MyModel;
