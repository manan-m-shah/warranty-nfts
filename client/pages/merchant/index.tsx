import React, { useContext, useEffect, useState } from 'react'
import MerchantLayout from '../../components/Merchant/MerchantLayout';
import { AppContext } from '../../context/AppProvider';
import Select from 'react-select'
import ItemComponent from '../../components/Merchant/ItemComponent';
import { Item } from '../../types/Contract';
import { mintNFT } from '../../utils/user';


const Merchant = () => {
  const { state, dispatch } = useContext(AppContext)
  const [activeItem, setActiveItem] = useState<Item>(state.items.length === 0 ? null : state.items[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [customerContractAddress, setCustomerContractAddress] = useState<string>('');
  const [serialNumber, setSerialNumber] = useState<string>('');

  //minting page where merchant can select an Item and mint NFTs

  useEffect(() => {
    if (state.items.length > 0) {
      setActiveItem(state.items[0])
    }
  }, [state])

  if (state.items.length === 0 || activeItem === null) {
    return (
      <MerchantLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-bold">You have no items</div>
          <div className="text-xl">Please add an item first</div>
        </div>
      </MerchantLayout>
    )
  }

  const options = state.items.map((item: Item, index: number) => {
    return { value: index, label: item.name }
  })

  return (
    <MerchantLayout>
      <div className='grid grid-cols-2 w-full px-8'>
        <img src={activeItem.imageURI} alt="" className='w-96 h-96 object-contain' />
        <div className='card-pop-out flex flex-col justify-center gap-y-8 p-8'>
          <Select options={options} onChange={(e: any) => {
            setActiveIndex(e.value)
            setActiveItem(state.items[e.value])
          }} />
          <div>
            <div className='text-2xl font-bold'>{activeItem.name}</div>
            <div className='text-xl'>{activeItem.description}</div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor="customer-address" className='text-2xl font-bold'>Customer Address</label>
              <input type="text" name="customer-address" id="customer-address" className='card-pop-in border-4 p-3' value={customerContractAddress} onChange={(e) => {
                setCustomerContractAddress(e.target.value)
              }} />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor="serial-number" className='text-2xl font-bold'>Serial Number</label>
              <input type="text" name="serial-number" id="serial-number" className='card-pop-in border-4 p-3' value={serialNumber} onChange={(e) => {
                setSerialNumber(e.target.value)
              }} />
            </div>
            <button
              className='button-pop-out bg-gradient-primary border-4 border-white hover:shadow-sm duration-300 ease-in p-3 text-white'
              onClick={(e) => {
                e.preventDefault()
                mintNFT(customerContractAddress, serialNumber, activeIndex)
              }}
            >
              Mint NFT
            </button>
          </form>
        </div>
      </div>
    </MerchantLayout>
  )
}

export default Merchant