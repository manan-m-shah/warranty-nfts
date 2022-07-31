import React from 'react'
import { Item } from '../../types/Contract'

type Props = {
  item: Item
}

const ItemComponent = (props: Props) => {
  const { item } = props

  return (
    <div className='card-pop-out flex items-center p-2 gap-y-2'>
      <div className='p-4'>
        <img src={item.imageURI} alt='img' className='w-48 h-48' />
      </div>
      <div className='h-full flex flex-col justify-between py-8 px-4 w-64'>
        <h1 className='text-xl text-left'>{item.name}</h1>
        <h3 className='text-sm'>{item.description}</h3>
        <button className='button-pop-out-2 hover:shadow-sm duration-300 ease-in border-4 border-white text-white cursor-pointer py-3 bg-gradient-primary rounded-lg w-full text-center'>Edit</button>
      </div>
    </div>
  )
}

export default ItemComponent