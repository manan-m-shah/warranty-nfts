import { ethers } from "hardhat";

async function main() {
  const WarrantyNFT = await ethers.getContractFactory("WarrantyNFT");
  const warrantynft = await WarrantyNFT.deploy();

  await warrantynft.deployed();

  console.log("Contract Deployed To:", warrantynft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
