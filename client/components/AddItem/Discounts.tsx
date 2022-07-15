import React, { Dispatch, SetStateAction } from 'react';
import { AddItemTabButton } from '../../types/AddItem';
import ItemDiscount from './Misc/ItemDiscount'
import NextButton from './Misc/NextButton';

type Props = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
}

const Loyalty = (props: Props) => {
  const { activeButton, setActiveButton } = props;
  return (
    <>
      <h1 className='text-gray-500 tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </h1>
      <div>
        <div className='grid grid-cols-2 w-full my-8'>
          <h1 className='text-gray-700 text-xl'>Item</h1>
          <h1 className='text-gray-700 text-xl'>Discount</h1>
        </div>
        <div className='flex flex-col gap-y-4'>
          <ItemDiscount activeButton={activeButton} setActiveButton={setActiveButton} />
          <ItemDiscount activeButton={activeButton} setActiveButton={setActiveButton} />
        </div>
      </div>
      <div className='flex items-center justify-start w-full gap-x-8'>
        <button
          className='button-pop-out py-3 px-8 border-4 border-white text-gray-600 hover:shadow-sm ease-in duration-300'>
          Skip For Now
        </button>
        <NextButton activeButton={activeButton} setActiveButton={setActiveButton} />
      </div>
    </>
  )
}

export default Loyalty