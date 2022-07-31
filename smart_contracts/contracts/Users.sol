// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

contract Users {
    //customer struct with name, phone
    struct Customer {
        string name;
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

    // function to add new merchant
    function addMerchant(string memory _name, string memory _email) public {
        require(_notEmpty(_name), "Name cannot be empty");
        require(_notEmpty(_email), "Email cannot be empty");
        address newMerchantAddress = msg.sender;
        addressToMerchant[newMerchantAddress] = Merchant({
            name: _name,
            email: _email
        });
    }

    // function to edit merchant
    function editMerchant(string memory _name, string memory _email) public {
        require(_notEmpty(_name), "Name cannot be empty");
        require(_notEmpty(_email), "Email cannot be empty");
        address newMerchantAddress = msg.sender;
        addressToMerchant[newMerchantAddress] = Merchant({
            name: _name,
            email: _email
        });
    }

    // function to get merchant
    function getMerchant(address _merchantAddress)
        public
        view
        returns (Merchant memory)
    {
        return addressToMerchant[_merchantAddress];
    }

    // function to add new customer
    function addCustomer(string memory _name, string memory _email) public {
        require(_notEmpty(_name), "Name cannot be empty");
        require(_notEmpty(_email), "Email cannot be empty");
        address newCustomerAddress = msg.sender;
        addressToCustomer[newCustomerAddress] = Customer({
            name: _name,
            email: _email
        });
    }

    // function to edit customer
    function editCustomer(string memory _name, string memory _email) public {
        require(_notEmpty(_name), "Name cannot be empty");
        require(_notEmpty(_email), "Email cannot be empty");
        address newCustomerAddress = msg.sender;
        addressToCustomer[newCustomerAddress] = Customer({
            name: _name,
            email: _email
        });
    }

    // function to get customer
    function getCustomer(address _customerAddress)
        public
        view
        returns (Customer memory)
    {
        return addressToCustomer[_customerAddress];
    }

    // function to check if string is empty
    function _notEmpty(string memory value) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((value))) !=
            keccak256(abi.encodePacked("")));
    }

    // modifier to check if the caller is a merchant
    modifier isMerchant() {
        require(
            _notEmpty(addressToMerchant[msg.sender].name),
            "Only Merchants can add items"
        );
        _;
    }

    // modifier to check if the caller and the merchant address are same
    modifier onlyMerchant(address _merchantAddress) {
        require(msg.sender == _merchantAddress, "Different Merchant");
        _;
    }

    // modifier to check if the caller is a customer
    modifier isCustomer() {
        require(
            _notEmpty(addressToCustomer[msg.sender].name),
            "Only Customers can buy items"
        );
        _;
    }

    // modifier to check if the caller and the customer address are same
    modifier onlyCustomer(address _customerAddress) {
        require(msg.sender == _customerAddress, "Different Customer");
        _;
    }
}
