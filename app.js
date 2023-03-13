const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const VerifyRoutes = require("./Routes/verify");
const cors = require("cors");
const WhiteList = ["http://localhost:5173"];

const corsOption = {
  origin: function (origin, callback) {
    if (WhiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Not Allowed").message);
    }
  },
  optionsSuccessStatus: 200,
  method: ["GET", "POST"],
};
app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/verify", VerifyRoutes);
app.get("/", (req, res) => {
  res.send("Home route");
});

app.listen(4000, () => {
  console.log("Server is live !");
});

// ////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// app.post("/verify", (req, res) => {
//   const jwtToken = req.body.jwtToken;
//   const contractAddress = req.body.contractAddress;
//   const tokenId = req.body.tokenId;
//   const decoded = jwt.verify(jwtToken, "12345");
//   const ownerAddress = decoded.owner;

//   console.log(ownerAddress);
//   const verifyOwner = async () => {
//     const settings = {
//       apiKey: "WIeYyhZo4J_UI8A2AqOi3KvCGVTK_nM4",
//       network: Network.MATIC_MAINNET,
//     };
//     const alchemy = new Alchemy(settings);
//     const data = await alchemy.nft.getOwnersForNft(contractAddress, tokenId);
//     const resOwnerAddress = data.owners;
//     console.log(resOwnerAddress[0]);

//     return (isVerified = ownerAddress == resOwnerAddress ? true : false);
//   };
//   verifyOwner().then((data) => {
//     res.send({
//       verification: data,
//       ownerAddress: ownerAddress,
//       tokenId: tokenId,
//       contractAddress: contractAddress,
//     });
//   });
// });
