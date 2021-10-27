// import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import "@nomiclabs/hardhat-truffle5";
import networks from './hardhat.network';

import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from 'hardhat/config';
 
const config: HardhatUserConfig = {
  mocha: {
    timeout: 300000000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks,
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
};

export default config;
