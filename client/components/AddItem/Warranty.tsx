import React, { Dispatch, SetStateAction, useState } from 'react'
import { AddItemTabButton } from '../../types/AddItem'
import NextButton from './Misc/NextButton';

type Props = {
  baseWarranty: number,
  setBaseWarranty: Dispatch<SetStateAction<number>>,
  loyaltyLimit: number,
  setLoyaltyLimit: Dispatch<SetStateAction<number>>,
  loyaltyPoints: number,
  setLoyaltyPoints: Dispatch<SetStateAction<number>>,
  timePeriod: number,
  setTimePeriod: Dispatch<SetStateAction<number>>,
}

const Warranty = (props: Props) => {
  const { baseWarranty, setBaseWarranty, loyaltyLimit, setLoyaltyLimit, loyaltyPoints, setLoyaltyPoints, timePeriod, setTimePeriod } = props;

  return (
    <div className='flex flex-col gap-y-2 text-gray-500'>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-center gap-x-2 p-1 w-fit rounded-2xl card-pop-in border-4 border-white'>
          <button
            className='button-pop-out border-2 border-white px-4 py-3 hover:shadow-md duration-300 ease-in'
            onClick={(e) => {
              e.preventDefault()
              setBaseWarranty(oldState => oldState - 1)
            }}
          >
            -
          </button>
          <span className='text-2xl text-center w-8 mx-2 mr-3'>{baseWarranty}</span>
          <button
            className='button-pop-out border-2 border-white px-4 py-3 hover:shadow-md duration-300 ease-in'
            onClick={(e) => {
              e.preventDefault()
              setBaseWarranty(oldState => oldState + 1)
            }}
          >
            +
          </button>
        </div>
        <h1 className='text-xl'>Months</h1>
      </div>

      <div className='flex gap-x-6 w-full items-center'>
        <span className='text-2xl border-4 w-20 card-pop-in text-center border-white py-2 px-4'>{loyaltyLimit}
        </span>
        <div className='flex flex-col w-full'>
          <label htmlFor="loyalty-months"
            className='mb-2 px-4'>
            Max Additional Loyalty Warranty
          </label>
          <input type="range"
            min={0}
            max={baseWarranty}
            value={loyaltyLimit}
            onChange={(e) => setLoyaltyLimit(Number(e.target.value))}
            className='accent-indigo-500 rounded-lg w-full'
          />
        </div>
      </div>

      <div className='flex gap-x-6 w-full items-center'>
        <span className='text-2xl border-4 w-20 card-pop-in text-center border-white py-2 px-4'>{loyaltyPoints}
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
            className='accent-indigo-500 rounded-lg w-full'
          />
        </div>
      </div>

      <div className='flex items-center gap-x-4'>
        <div className='flex items-center gap-x-2 p-1 w-fit rounded-2xl card-pop-in border-4 border-white'>
          <button
            className='button-pop-out border-2 border-white px-4 py-3 hover:shadow-md duration-300 ease-in'
            onClick={(e) => {
              e.preventDefault()
              setTimePeriod(oldState => oldState - 1)
            }}
          >
            -
          </button>
          <span className='text-2xl text-center w-8 mx-2 mr-3'>{timePeriod}</span>
          <button
            className='button-pop-out border-2 border-white px-4 py-3 hover:shadow-md duration-300 ease-in'
            onClick={(e) => {
              e.preventDefault()
              setTimePeriod(oldState => oldState + 1)
            }}
          >
            +
          </button>
        </div>
        <h1 className='text-xl'>Loyalty Duration</h1>
      </div>


    </div>
  )
}

export default Warranty