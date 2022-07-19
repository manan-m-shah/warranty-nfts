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

const warrantyMonths = 12
const loyaltyMonths = 10
const loyaltyPoints = 12
const WarrantyProduct = (props: DetailsParams) => {
    const { activeButton, setActiveButton, itemName, setItemName, itemDescription, setItemDescription } = props
    return (
        <>
            <h1 className='text-gray-500 tracking-wide'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h1>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-x-4'>
                    <span className='text-2xl text-orange-600 font-bold flex gap-x-2 items-center  '>{warrantyMonths} </span>
                    <span className='text-2xl text-orange-600  flex gap-x-2 items-center   '>Months</span>
                </div>
                <div className='flex gap-x-4'>
                    <span className='text-2xl  text-orange-600 font-bold  flex gap-x-2 items-center  '>{loyaltyMonths} </span>
                    <span className='text-2xl text-orange-600 flex gap-x-2 items-center   '>Additional Loyalty Warranty</span>
                </div>
                <div className='flex gap-x-4'>
                    <span className='text-2xl  text-orange-600 font-bold  flex gap-x-2 items-center  '>{loyaltyPoints} </span>
                    <span className='text-2xl text-orange-600  flex gap-x-2 items-center   '>Loyalty Points</span>
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

export default WarrantyProduct