var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Factory = artifacts.require("./factory.sol");
var Origins = artifacts.require("./Origins.sol");
var OriginalToken = artifacts.require("./OriginalCoin.sol");
var Storage = artifacts.require("./storage.sol");



module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(Factory);
  deployer.deploy(Origins);
  deployer.deploy(OriginalToken);
  deployer.deploy(Storage);
  deployer.autolink();
};
