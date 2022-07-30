import React, { useContext } from 'react'
import { AppContext } from '../../context/AppProvider'
import { Item } from '../../types/Contract'
import ItemComponent from './ItemComponent'

const MyItems = () => {
  const { state, dispatch } = useContext(AppContext)

  return (
    <div className='grid grid-cols-2 gap-4 w-full px-8'>
      {state.items.map((item: Item, index: number) => (
        <ItemComponent item={item} key={index} />
      ))}
    </div>
  )
}

export default MyItems