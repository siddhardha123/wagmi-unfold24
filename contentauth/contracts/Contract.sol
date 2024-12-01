// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContentRegistry {

    // Struct to store the content registration details
    struct Content {
        address userAddress;
        string contentHash;
    }

    // Mapping to store user address as key and an array of content hashes as values
    mapping(address => string[]) private userContents;
    
    // Mapping to store content hash and its corresponding user address
    mapping(string => address) private contentOwners;

    // Event to log content registration
    event ContentRegistered(address indexed userAddress, string contentHash);

    // Method to register content
    function registerContent(string memory _contentHash) public {
        address user = msg.sender;
        
        // Save the content hash for the user
        userContents[user].push(_contentHash);
        
        // Also store the content hash and its corresponding user address
        contentOwners[_contentHash] = user;

        // Emit an event after registering the content
        emit ContentRegistered(user, _contentHash);
    }

    // Method to get the user address by content hash
    function getUserByContent(string memory _contentHash) public view returns (address) {
        return contentOwners[_contentHash];
    }

    // Method to get content hash by user address
    function getContentByUser(address _userAddress) public view returns (string[] memory) {
        return userContents[_userAddress];
    }

    // Method to get all content hashes of a specific user
    function getAllContentHashes(address _userAddress) public view returns (string[] memory) {
        return userContents[_userAddress];
    }


}
