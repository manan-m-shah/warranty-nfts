import React, { Dispatch, SetStateAction } from 'react';
import { AddItemTabButton } from '../../types/AddItem';
import ItemDiscount from './Misc/ItemDiscountP'
import NextButton from './Misc/NextButton';


type Props = {
    activeButton: AddItemTabButton,
    setActiveButton: Dispatch<SetStateAction<number>>,
}

const Loyalty = (props: Props) => {
    const { activeButton, setActiveButton } = props;
    return (
        <>
            <div>
                <p className='text-gray-500 tracking-wide'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse enim consectetur magni ut recusandae odit? Provident, labore eaque consequatur illum facere et mollitia consequuntur aperiam error totam. Quae, sed maxime?
                </p>
            </div>
            <div className='grid grid-cols-2 w-full'>
                <h1 className='text-gray-700 text-xl'>Item</h1>
                <h1 className='text-gray-700 text-xl'>Discount</h1>
            </div>
            <div className='shadow-lg rounded-lg text-lg py-2 px-4 border-2 text-gray-700 flex flex-row'>
                <ItemDiscount activeButton={activeButton} setActiveButton={setActiveButton} />

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