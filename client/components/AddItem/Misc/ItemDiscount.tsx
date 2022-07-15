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
          <input type="range"
            min={0}
            max={100}
            value={12}
            onChange={(e) => console.log(e.target.value)}
            className='accent-rose-300 rounded-lg'
          />
        </div>
      </div>
    </>
  )
}

export default ItemDiscount