const LandRegistry = artifacts.require("LandRegistry");

module.exports = function (deployer) {
    // Deploy LandRegistry with the owner's name as a parameter
    deployer.deploy(LandRegistry, "John Doe");
};
