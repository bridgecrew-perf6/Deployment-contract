
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ERC20 {

    string public name;

    constructor() {
        name = "Harmeet";
    }   

    function getName() public view returns (string memory) {
        return name;
    }
}