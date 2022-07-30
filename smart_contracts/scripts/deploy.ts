import { ethers } from "hardhat";

async function main() {
  const WarrantyNFTs = await ethers.getContractFactory("WarrantyNFTs");
  const warrantynfts = await WarrantyNFTs.deploy();

  await warrantynfts.deployed();

  console.log("Contract Deployed To:", warrantynfts.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
