// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

import "./Items.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import {Base64} from "./Base64.sol";

contract WarrantyNFTs is ERC721, Items {
    constructor() ERC721("TestWarrantyNFT", "TWNFT") {}

    // struct warranty with warranty, loyaltyPoints, purchaseDate, itemId
    struct Warranty {
        string serialNumber; // unique serial number of the warranty
        string repairStatus; // repair status of the warranty
        uint32 itemId; // dynamic name and description
        uint32 purchaseDate; // static, purchase date
        uint32 warranty; // static, includes loyalty warranty
        uint32 loyaltyLimit; // static, includes loyalty limit
        uint32 loyaltyPoints; // static, includes loyalty points
        bool soulBound; // soul bound or not
    }

    // storing an array of warranties
    Warranty[] private warranties;

    // function to add warranty
    function addWarranty(
        uint32 _itemId,
        string memory _serialNumber,
        address _to
    )
        internal
        onlyMerchant(items[_itemId].merchantAddress)
        returns (uint tokenId)
    {
        require(_notEmpty(_serialNumber), "Serial number cannot be empty");
        uint256 newTokenId = warranties.length;
        warranties.push(
            Warranty({
                serialNumber: _serialNumber,
                repairStatus: "Working",
                itemId: _itemId,
                purchaseDate: uint32(block.timestamp),
                warranty: items[_itemId].baseWarranty,
                loyaltyPoints: items[_itemId].loyaltyPoints,
                loyaltyLimit: uint32(
                    (items[_itemId].loyaltyLimit *
                        (calculateLoyaltyPoints(_to) / 10))
                ),
                soulBound: items[_itemId].soulBound
            })
        );
        return newTokenId;
    }

    function editWarranty(uint32 _warrantyId, string memory _repairStatus)
        public
    {
        warranties[_warrantyId].repairStatus = _repairStatus;
    }

    function getWarranty(uint tokenId)
        private
        view
        returns (Warranty memory warranty)
    {
        return warranties[tokenId];
    }

    //function to calculate warranty remaining
    function warrantyRemaining(uint tokenId)
        public
        view
        returns (uint32 remainingTime)
    {
        Warranty memory warranty = getWarranty(tokenId);
        uint32 purchaseDate = warranty.purchaseDate;
        uint32 warrantyEndDate = purchaseDate +
            warranty.warranty *
            30 days +
            warranty.loyaltyLimit *
            30 days;
        uint32 warrantyTimeRemaining = (warrantyEndDate -
            uint32(block.timestamp)) / 30 days;
        return warrantyTimeRemaining;
    }

    //function to calculate loyalty points of all purchased warranties of a user
    function calculateLoyaltyPoints(address _to) public view returns (uint32) {
        Warranty[] memory userWarranties = getWarranties(_to);
        uint32 loyaltyPoints = 0;
        for (uint i = 0; i < userWarranties.length; i++) {
            loyaltyPoints += userWarranties[i].loyaltyPoints;
        }
        return loyaltyPoints;
    }

    function getMyWarranties() public view returns (Warranty[] memory) {
        return getWarranties(msg.sender);
    }

    function getWarranties(address _address)
        private
        view
        returns (Warranty[] memory)
    {
        Warranty[] memory result = new Warranty[](balanceOf(_address));
        uint counter = 0;
        for (uint i = 0; i < warranties.length; i++) {
            if (ownerOf(i) == msg.sender) {
                result[counter] = warranties[i];
                counter++;
            }
        }
        return result;
    }

    function getMerchantWarranties() public view returns (Warranty[] memory) {
        uint counter = 0;
        for (uint i = 0; i < warranties.length; i++) {
            if (items[warranties[i].itemId].merchantAddress == msg.sender) {
                counter++;
            }
        }
        Warranty[] memory result = new Warranty[](counter);
        counter = 0;
        for (uint i = 0; i < warranties.length; i++) {
            if (items[warranties[i].itemId].merchantAddress == msg.sender) {
                result[counter] = warranties[i];
                counter++;
            }
        }
        return result;
    }

    /* 
    function formatTokenURI(string memory imageURI, uint tokenId)
        public
        view
        returns (string memory)
    {
        string memory baseURL = "data:application/json;base64,";
        string memory json = string(
            abi.encodePacked(
                '{"name":"',
                items[warranties[tokenId].itemId].name,
                '"description":"',
                items[warranties[tokenId].itemId].description,
                '"image":"',
                imageURI,
                '"}'
            )
        );
        string memory jsonBase64Encoded = Base64.encode(bytes(json));
        return string(abi.encodePacked(baseURL, jsonBase64Encoded));
    }
    */

    function safeMint(
        address _to,
        string memory _serialNumber,
        uint32 _itemId
    ) public onlyMerchant(items[_itemId].merchantAddress) {
        /* Encode the SVG to a Base64 string and then generate the tokenURI */
        uint tokenId = addWarranty(_itemId, _serialNumber, _to);
        // string memory tokenURIString = formatTokenURI(
        //     items[_itemId].imageURI,
        //     tokenId
        // );
        _safeMint(_to, tokenId);
        // _setTokenURI(tokenId, tokenURIString);
    }
}
