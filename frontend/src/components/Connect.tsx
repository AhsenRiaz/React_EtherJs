import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState } from "react";
import { getSigner } from "../utils/signer";
import { Token_Contract, Token_Contract_Address } from "../ABIs/contracts";
import { injectedConnector } from "../utils/connectors";
import { UserRejectedRequestError } from "@web3-react/injected-connector";

const Connect = () => {
  const [account, setAccount] = useState<string>("");
  const { activate } = useWeb3React();

  const activateWallet = async () => {
    activate(injectedConnector, undefined, true).catch((error) => {
      // ignore the error if it's a user rejected request
      if (error instanceof UserRejectedRequestError) {
        alert("User rejected request");
      } else {
      }
    });
  };

  const mintToken = async () => {
    try {
      const signer = await getSigner();
      let erc20Token = new ethers.Contract(
        Token_Contract_Address,
        Token_Contract.abi,
        signer
      );
      console.log("erc20Token", erc20Token);
      let transaction = await erc20Token.mint(
        "0xfF1312d60d813aCeeF77C10097D87A6C9F19661f",
        "3000000000000000000"
      );
      console.log("transacino", transaction);
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={activateWallet}>Connect Wallet</button>
      <button style={{ marginTop: "4rem" }} onClick={mintToken}>
        Mint Token
      </button>
    </div>
  );
};

export default Connect;
