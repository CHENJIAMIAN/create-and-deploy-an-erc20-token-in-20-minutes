require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: '0.8.4',
    networks: {
        mumbai: {
            //API 密钥 sZxJUUQ8dGRBAfmRKbF6DDfPt4TESQMt
            url: 'https://polygon-mumbai.g.alchemy.com/v2/sZxJUUQ8dGRBAfmRKbF6DDfPt4TESQMt',
            // url:'wss://polygon-mumbai.g.alchemy.com/v2/sZxJUUQ8dGRBAfmRKbF6DDfPt4TESQMt'
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
        ropsten: {
            // url: `wss://ropsten.infura.io/ws/v3/1b118c1ba6424b8f9e52031c6f967a1d`,
            url: `https://ropsten.infura.io/v3/1b118c1ba6424b8f9e52031c6f967a1d`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
            gas: 8000000000,
            gasPrice: 8000000000,
            saveDeployments: true,
        },
    },
};
