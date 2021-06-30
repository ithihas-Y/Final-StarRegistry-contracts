const { ethers, upgrades } = require("hardhat");

async function main() {
    const MarketV1 = await ethers.getContractFactory("StarRegistryV1");
    console.log("deploying proxy,MarketPlaceV1,proxy admin");
    const MarketV1Proxy = await upgrades.deployProxy(MarketV1,["0x4cae95d03c85ae462daec44d5426f547a26faf47",5,5],{initializer:"initialize"}); //add BSCmain-net AST address here/currently set to testnet token address
    console.log("MarketProxy deployed to:"+MarketV1Proxy.address)
}

main().then(()=>process.exit(0)).
catch(error=>{
    console.error(error)
    process.exit(1)
})