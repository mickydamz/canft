require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const INFURA_URL = 'https://rinkeby.infura.io/v3/90a4dbc8470c40afbd72f1c7326803df';

const PRIVATE_KEY = '8648d368c81948bca5e14f872b161bfbd7f1cf02516d71b3372a7c24d5e7b25d';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url : INFURA_URL,
      accounts : [`0x${PRIVATE_KEY}`]
    }
  }
};
