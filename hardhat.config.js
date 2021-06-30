require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const privateKey = "7fee91bc95b12134f9c3e73a1ebf6a8d151b034202826571f785751f26f98590"; // add metamask privateKey here
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork:"BSCMain",//change to BSCMain when deploying
  networks:{
    BSCTest:{
      url:"https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts:[privateKey]
    },
    BSCMain:{
      url:"https://bsc-dataseed.binance.org/",
      accounts:[privateKey]
    }
  },
  solidity: "0.6.12",
};

