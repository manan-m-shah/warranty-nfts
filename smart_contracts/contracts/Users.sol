// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

contract Users {
    //customer struct with name, phone
    struct Customer {
        string name;
        string phone;
        string email;
    }
    // address => Customer
    mapping(address => Customer) private addressToCustomer;

    //merchant struct with name
    struct Merchant {
        string name;
        string email;
    }
    // address => Merchant
    mapping(address => Merchant) private addressToMerchant;

    function addMerchant(string memory _name) public {
        require(_notEmpty(_name), "Merchant name cannot be empty");
        Merchant storage newMerchant = addressToMerchant[msg.sender];
        newMerchant.name = _name;
    }

    function editMerchant(string memory _name) public {
        require(_notEmpty(_name), "Merchant name cannot be empty");
        Merchant storage newMerchant = addressToMerchant[msg.sender];
        newMerchant.name = _name;
    }

    function _notEmpty(string memory value) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((value))) !=
            keccak256(abi.encodePacked("")));
    }

    modifier isMerchant {
        require(_notEmpty(addressToMerchant[msg.sender].name), "Only Merchants can add items");
        _;
    }

    modifier onlyMerchant (address _merchantAddress) {
        require(msg.sender == _merchantAddress, "Different Merchant");
        _;
    }
}
