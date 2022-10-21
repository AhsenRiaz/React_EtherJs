import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const getSigner = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return signer;
  } catch (err) {
    console.log("Error in creating signer", err);
  }
};