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

const name = "Daniel"
const DetailsProduct = (props: DetailsParams) => {
    const { activeButton, setActiveButton, itemName, setItemName, itemDescription, setItemDescription } = props
    return (
        <>
            <div className='flex gap-x-4 w-full text-lg font-sans'>
                <span className='text-blue-800 font-bold '>{name}</span>
                <span className='text-blue-700'>.Soulbound</span>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem dignissimos quibusdam temporibus earum eaque quod tenetur dolorum, ipsa sit, eum ullam optio. Maxime asperiores fuga enim? Sit, eius recusandae?
                </p>
            </div>
            <div className='text-gray-500 tracking-wide'>
                <NextButton activeButton={activeButton} setActiveButton={setActiveButton} />
            </div>
        </>
    )
}

export default DetailsProduct