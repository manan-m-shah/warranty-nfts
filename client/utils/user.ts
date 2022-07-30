import Router from "next/router"
import React from "react"
import { ActionKind } from "../context/AppProvider"
import { DispatchType } from "../types/Misc"
import { addCustomer, addItem, addMerchant, connectWallet, getCustomer, getItems, getMerchant, safeMint, getWarranties, getMerchantWarranties } from "./ethers"
import notify from "./notify"

export const connectToMetamask = async (dispatch: React.Dispatch<DispatchType>) => {
  console.log('connecting to metamask');
  const { accounts } = await connectWallet()
  if (accounts.length) {
    dispatch({ type: ActionKind.SET_USER, payload: accounts[0] })
  } else {
    notify('Unable to connect to Metamask', 'error')
  }
}

export const addNewMerchant = async (name: string, email: string, state: any, dispatch: any) => {
  const addNewMerchantSuccess = await addMerchant(name, email)
  if (addNewMerchantSuccess) {
    Router.push('/merchant')
  }
  return addNewMerchantSuccess
}

export const getCurrentMerchant = async (address: string) => {
  const merchant = await getMerchant(address)
  return merchant
}

export const addNewCustomer = async (name: string, email: string, state: any, dispatch: any) => {
  const addNewCustomerSuccess = await addCustomer(name, email)
  if (addNewCustomerSuccess) {
    Router.push('/customer')
  }
  return addNewCustomerSuccess
}

export const getCurrentCustomer = async (address: string) => {
  const customer = await getCustomer(address)
  return customer
}

export const addNewItem = async (name: string, description: string, imageURI: string, baseWarranty: number, loyaltyLimit: number, loyaltyPoints: number, timePeriod: number, soulBound: boolean) => {
  const addNewItemSuccess = await addItem(name, description, imageURI, baseWarranty, loyaltyLimit, loyaltyPoints, timePeriod, soulBound)
  if (addNewItemSuccess) {
    Router.push('/merchant/items')
  }
  return addNewItemSuccess
}

export const getMyItems = async () => {
  const items = await getItems()
  return items
}

export const mintNFT = async (address: string, serialNumber: string, itemId: number) => {
  const safeMintSuccess = await safeMint(address, serialNumber, itemId)
  return safeMintSuccess
}

export const getMyWarranties = async () => {
  const warranties = await getWarranties()
  return warranties
}

export const getSoldWarranties = async () => {
  const warranties = await getMerchantWarranties()
  return warranties
}