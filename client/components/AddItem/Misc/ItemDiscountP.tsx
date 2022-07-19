import React, { Dispatch, SetStateAction } from 'react'
import { AddItemTabButton } from '../../../types/AddItem';

type Props = {
    activeButton: AddItemTabButton,
    setActiveButton: Dispatch<SetStateAction<number>>,
}

const ItemDiscount = (props: Props) => {
    const { activeButton, setActiveButton } = props;
    return (
        <>
            <div className='grid grid-cols-2 w-full'>
                <h1>Item-1</h1>
                <div className='flex gap-x-4 w-full'>
                    <h1>12 %</h1>
                </div>
            </div>
        </>
    )
}

export default ItemDiscount