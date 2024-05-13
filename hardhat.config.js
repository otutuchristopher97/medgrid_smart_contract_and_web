require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    defaultNetwork: "mumbai",
    networks: {
      hardhat: {},
      goerli: {
        url: "https://rpc.ankr.com/eth_goerli",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
      mumbai: {
        url: "https://rpc.ankr.com/polygon",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
