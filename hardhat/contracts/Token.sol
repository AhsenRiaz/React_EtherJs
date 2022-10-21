// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20 {
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {}

    /**
     * @param account (type address) address of recipient
     * @param amount (type uint256) amount of token
     * @dev function use to mint token
     */

    function mint(address account, uint256 amount) public returns (bool) {
        require(amount != uint256(0), "ICO: amount is 0");
        _mint(account, amount);
        return true;
    }

    /**
     * @param amount (type uint256) amount of token
     * @param account (type address) address of recipient
     * @dev function to use to burn token
     */
    function burn(uint256 amount, address account) public returns (bool) {
        require(amount > uint256(0), "CoinioToken: amount is 0");
        _burn(account, amount);
        return true;
    }
}
