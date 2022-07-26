// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

import "./Items.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import {Base64} from "./Base64.sol";

contract WarrantyNFTs is ERC721, ERC721URIStorage, ERC721Enumerable, Items {
    constructor() ERC721("TestWarrantyNFT", "TWNFT") {}

    // struct warranty with warranty, loyaltyPoints, purchaseDate, itemId
    struct Warranty {
        string serialNumber; // unique serial number of the warranty
        string repairStatus; // repair status of the warranty
        uint32 itemId; // dynamic name and description
        uint32 purchaseDate; // static, purchase date
        uint32 warranty; // static, includes loyalty warranty
        uint32 loyaltyPoints; // static, includes loyalty points
        bool soulBound; // soul bound or not
    }

    // storing an array of warranties
    Warranty[] private warranties;

    // function to add warranty
    function addWarranty(uint32 _itemId, string memory _serialNumber)
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
                loyaltyPoints: items[_itemId].loyaltyLimit,
                soulBound: items[_itemId].soulBound
            })
        );
        return newTokenId;
    }

    function svgToImageURI(string memory svg)
        public
        pure
        returns (string memory)
    {
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(svg));
        /* 
      abi.encodePacked is a function provided by Solidity which
      is used to concatenate two strings, similar to a `concat()`
      function in JavaScript.
    */
        return string(abi.encodePacked(baseURL, svgBase64Encoded));
    }

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

    function getWarranty(uint tokenId)
        public
        view
        returns (Warranty memory warranty)
    {
        return warranties[tokenId];
    }

    function safeMint(
        address _to,
        string memory _serialNumber,
        uint32 _itemId,
        string memory _svg
    ) public {
        /* Encode the SVG to a Base64 string and then generate the tokenURI */
        uint tokenId = addWarranty(_itemId, _serialNumber);
        string memory imageURI = svgToImageURI(_svg);
        string memory tokenURIString = formatTokenURI(imageURI, tokenId);
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, tokenURIString);
    }

    // * The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
