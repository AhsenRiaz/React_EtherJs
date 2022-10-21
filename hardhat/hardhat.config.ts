import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    artifacts: "../frontend/ABIs",
  },
};

export default config;
