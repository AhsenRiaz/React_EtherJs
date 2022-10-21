import { providers } from "ethers";

export const getLibrary = (
  provider: providers.ExternalProvider | providers.JsonRpcFetchFunc
) => {
  return new providers.Web3Provider(provider);
};