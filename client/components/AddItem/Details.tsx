import React, { Dispatch, SetStateAction } from 'react'
import { AddItemTabButton } from '../../types/AddItem'
import NextButton from './Misc/NextButton'

type DetailsParams = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
  itemName: string,
  setItemName: Dispatch<SetStateAction<string>>,
  itemDescription: string,
  setItemDescription: Dispatch<SetStateAction<string>>,
}

const Details = (props: DetailsParams) => {
  const { activeButton, setActiveButton, itemName, setItemName, itemDescription, setItemDescription } = props
  return (
    <>
      <div className='items-center w-full'>
        <label htmlFor='item-name' className='flex mb-2 px-1'>Item Name</label>
        <input type='text' className={'p-3 border-2 border-white card-pop-in w-full outline-2 text-gray-500 ' + activeButton.selectedAltStyle} value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div className='flex items-center w-full'>
        <input type="checkbox" className={'mr-4 w-5 h-5 shadow-md ' + activeButton.selectedAltStyle} />
        <label htmlFor="soulbound">Soulbound</label>
      </div>
      <div className='items-center w-full'>
        <label htmlFor='item-name' className='flex mb-2 px-1'>Item Description</label>
        <textarea className={'h-40 p-3 border-2 border-white card-pop-in w-full outline-2 text-gray-500 ' + activeButton.selectedAltStyle} value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
      </div>
      <div className=''>
        <NextButton activeButton={activeButton} setActiveButton={setActiveButton} />
      </div>
    </>
  )
}

export default Details