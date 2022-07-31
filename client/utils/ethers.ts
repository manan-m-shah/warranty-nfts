import { ethers } from 'ethers';
import Router from 'next/router';
import { contract_address, contract_abi } from './contract_data';
import notify from './notify';

export const connectWallet = async () => {
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const accounts = await provider.send('eth_requestAccounts', []);
  return { provider, signer, accounts };
};

export const getWallet = async () => {
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_accounts', []);
  const signer = provider.getSigner()
  return { provider, signer };
};

export const addMerchant = async (name: string, email: string) => {
  const { signer } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, signer);
  const tx = await contract.addMerchant(name, email);
  notify('Registering you as a merchant', 'info');
  const result = await tx.wait();
  if (result.status === 1) {
    notify('Congrats, you are now a merchant', 'success')
    return true;
  } else {
    notify('Unable to add merchant', 'error')
    return false;
  }
}

export const getMerchant = async (address: string) => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider);
  return await contract.getMerchant(address);
}

export const addCustomer = async (name: string, email: string) => {
  const { signer } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, signer);
  const tx = await contract.addCustomer(name, email);
  notify('Registering you as a customer', 'info');
  const result = await tx.wait();
  if (result.status === 1) {
    notify('Congrats, you are now a customer', 'success')
    return true;
  } else {
    notify('Unable to add customer', 'error')
    return false;
  }
}

export const getCustomer = async (address: string) => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider);
  return await contract.getCustomer(address);
}

export const addItem = async (name: string, description: string, imageURI: string, baseWarranty: number, loyaltyLimit: number, loyaltyPoints: number, timePeriod: number, soulBound: boolean) => {
  const { signer } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, signer);
  const tx = await contract.addItem(name, description, imageURI, baseWarranty, loyaltyLimit, loyaltyPoints, timePeriod, soulBound);
  notify('Adding item', 'info');
  const result = await tx.wait();
  if (result.status === 1) {
    notify('Item added', 'success')
    return true;
  } else {
    notify('Unable to add item', 'error')
    return false;
  }
}

export const getItem = async (id: number) => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider);
  return await contract.getItem(id);
}

export const getItems = async () => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider);
  return await contract.getMyItems();
}

export const safeMint = async (address: string, serialNumber: string, itemId: number) => {
  const { signer } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, signer);
  const tx = await contract.safeMint(address, serialNumber, itemId);
  notify('Minting item', 'info');
  const result = await tx.wait();
  if (result.status === 1) {
    notify('Item minted', 'success')
    return true;
  } else {
    notify('Unable to mint item', 'error')
    return false;
  }
}

export const getWarranties = async () => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider.getSigner());
  const warranties = await contract.getMyWarranties();
  console.log(warranties);
  return warranties;
}

export const getMerchantWarranties = async () => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider.getSigner());
  return await contract.getMerchantWarranties();
}

export const getWarrantyRemaining = async (id: number) => {
  const { provider } = await getWallet()
  const contract = new ethers.Contract(contract_address, contract_abi, provider.getSigner());
  return await contract.warrantyRemaining(id);
}
