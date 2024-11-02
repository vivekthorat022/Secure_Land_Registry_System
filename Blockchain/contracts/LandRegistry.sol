// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract LandRegistry {
    string public ownerName;

    constructor(string memory _ownerName) {
        ownerName = _ownerName;
    }

    function updateOwnerName(string memory newOwnerName) public {
        ownerName = newOwnerName;
    }
}
