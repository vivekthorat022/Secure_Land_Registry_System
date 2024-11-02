// 3_update_land_registry.js
const LandRegistry = artifacts.require("LandRegistry");

module.exports = async function (deployer) {
    // First, let's deploy the contract with an initial owner name.
    await deployer.deploy(LandRegistry, "Alice");

    // After deployment, you can interact with the instance if needed.
    const instance = await LandRegistry.deployed();
    
    // Optionally, you can update the owner name after deployment.
    await instance.updateOwnerName("Bob");
};
