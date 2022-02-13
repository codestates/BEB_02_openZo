const Migrations = artifacts.require("Migrations");
const OpzNFTs = artifacts.require("OpzNFTs");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(OpzNFTs);
};
