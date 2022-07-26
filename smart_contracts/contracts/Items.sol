// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

import "./Users.sol";

contract Items is Users {
    //item struct with name, description, warranty and loyaltyPoints
    struct Item {
        address merchantAddress;
        string name;
        string description;
        uint32 baseWarranty;
        uint32 loyaltyLimit;
        bool soulBound;
    }

    // storing an array of items
    Item[] internal items;

    // function to add item
    function addItem(
        string memory _name,
        string memory _description,
        uint32 _baseWarranty,
        uint32 _loyaltyLimit,
        bool _soulBound
    ) public isMerchant {
        require(_notEmpty(_name), "Item name cannot be empty");
        require(_notEmpty(_description), "Item description cannot be empty");
        items.push(
            Item({
                merchantAddress: msg.sender,
                name: _name,
                description: _description,
                baseWarranty: _baseWarranty,
                loyaltyLimit: _loyaltyLimit,
                soulBound: _soulBound
            })
        );
    }

    // function to edit item
    function editItem(
        uint32 _itemId,
        string memory _name,
        string memory _description,
        uint32 _baseWarranty,
        uint32 _loyaltyLimit,
        bool _soulBound
    ) public isItem(_itemId) onlyMerchant(items[_itemId].merchantAddress) {
        require(_notEmpty(_name), "Item name cannot be empty");
        require(_notEmpty(_description), "Item description cannot be empty");
        items[_itemId].name = _name;
        items[_itemId].description = _description;
        items[_itemId].baseWarranty = _baseWarranty;
        items[_itemId].loyaltyLimit = _loyaltyLimit;
        items[_itemId].soulBound = _soulBound;
    }

    // function to sender's items
    function getMyItems() public view returns (Item[] memory) {
        return _getItemsByMerchant(msg.sender);
    }

    // function to get items of a merchant
    function _getItemsByMerchant(address _merchantAddress)
        internal
        view
        returns (Item[] memory)
    {
        uint totalItems = 0;
        for (uint i = 0; i < items.length; i++) {
            if (items[i].merchantAddress == _merchantAddress) {
                totalItems = totalItems + 1;
            }
        }
        Item[] memory itemsOfMerchant = new Item[](totalItems);
        uint index = 0;
        for (uint i = 0; i < items.length; i++) {
            if (items[i].merchantAddress == _merchantAddress) {
                itemsOfMerchant[index] = items[i];
                index = index + 1;
            }
        }
        return itemsOfMerchant;
    }

    // modifier to check if the item is in the array
    modifier isItem(uint _itemId) {
        require(_itemId < items.length, "Item does not exist");
        _;
    }
}
