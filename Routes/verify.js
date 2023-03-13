const ethers = require("ethers");
const router = require("express").Router();
const Alchemy = require("alchemy-sdk").Alchemy;
const Network = require("alchemy-sdk").Network;

router.post("/", (req, res) => {
  // getting body data through post request
  const publicKey = req.body.publicKey;
  const contractAddress = req.body.contractAddress;
  const tokenId = req.body.tokenId;
  const hash = req.body.hash;
  const signMessage = req.body.signMessage;

  const decode = (publickey) => {
    // checking public key fuction
    const genPublicKey = ethers.recoverAddress(
      ethers.hashMessage(hash),
      signMessage
    );
    console.log("body key =>", publicKey);
    const result = publickey === genPublicKey ? true : false;
    console.log("result => ", result);

    // api function
    const verifyOwner = async () => {
      const settings = {
        apiKey: "WIeYyhZo4J_UI8A2AqOi3KvCGVTK_nM4",
        network: Network.MATIC_MAINNET,
      };
      const alchemy = new Alchemy(settings);
      const data = await alchemy.nft.getOwnersForNft(contractAddress, tokenId);
      const resOwnerAddress = data.owners;
      console.log("resOwner => ", resOwnerAddress[0]);

      return genPublicKey == ethers.getAddress(resOwnerAddress[0])
        ? true
        : false;
    };
    // is public key is verified then call api
    if (result) {
      verifyOwner().then((data) => {
        res.send({ verification: data });
      });
    } else {
      res.send({
        verification: false,
        Error: "Not varified user",
      });
    }
  };

  // calling decode function for checking public key
  decode(publicKey);
});

module.exports = router;
