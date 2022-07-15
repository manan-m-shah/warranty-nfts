import React, { Dispatch, SetStateAction, useState } from 'react'
import { AddItemTabButton } from '../../types/AddItem'
import NextButton from './Misc/NextButton';

type Props = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
  warrantyMonths: number,
  setWarrantyMonths: Dispatch<SetStateAction<number>>,
  loyaltyMonths: number,
  setLoyaltyMonths: Dispatch<SetStateAction<number>>,
  loyaltyPoints: number,
  setLoyaltyPoints: Dispatch<SetStateAction<number>>,
}

const Warranty = (props: Props) => {
  const { activeButton, setActiveButton, warrantyMonths, setWarrantyMonths, loyaltyMonths, setLoyaltyMonths, loyaltyPoints, setLoyaltyPoints } = props;

  return (
    <>
      <h1 className='text-gray-500 tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </h1>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-center gap-x-2 p-1 w-fit rounded-2xl card-pop-in border-2 border-white'>
          <button
            className={'rounded-xl button-pop-out-2 hover:shadow-sm font-bold border-2 border-white px-3 pb-1 text-3xl ' + activeButton.selectedStyle + ' text-gray-700 bg-gray-200'}
            onClick={() => setWarrantyMonths(oldState => oldState - 1)}
          >
            -
          </button>
          <span className='text-2xl text-center w-8 mx-2 mr-3'>{warrantyMonths}</span>
          <button
            className={'rounded-xl button-pop-out-2 hover:shadow-sm font-bold border-2 border-white px-2 pb-1 text-3xl ' + activeButton.selectedStyle + ' text-orange-400 bg-gray-200'}
            onClick={() => setWarrantyMonths(oldState => oldState + 1)}
          >
            +
          </button>
        </div>
        <h1 className='text-2xl text-gray-500'>Months</h1>
      </div>

      <div className='flex gap-x-6 w-full items-center'>
        <span className='text-2xl border-2 w-20 card-pop-in text-center border-white py-2 px-4'>{loyaltyMonths}
        </span>
        <div className='flex flex-col w-full'>
          <label htmlFor="loyalty-months"
            className='mb-2 px-4'>
            Additional Loyalty Warranty
          </label>
          <input type="range"
            min={0}
            max={warrantyMonths}
            value={loyaltyMonths}
            onChange={(e) => setLoyaltyMonths(Number(e.target.value))}
            className='accent-orange-300 rounded-lg w-full'
          />
        </div>
      </div>

      <div className='flex gap-x-6 w-full items-center'>
        <span className='text-2xl border-2 w-20 card-pop-in text-center border-white py-2 px-4'>{loyaltyPoints}
        </span>
        <div className='flex flex-col w-full'>
          <label htmlFor="loyalty-months"
            className='mb-2 px-4'>
            Loyalty Points
          </label>
          <input type="range"
            min={0}
            max={10}
            value={loyaltyPoints}
            onChange={(e) => setLoyaltyPoints(Number(e.target.value))}
            className='accent-orange-300 rounded-lg w-full'
          />
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

export default Warranty