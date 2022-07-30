import React from 'react'
import { Item, Warranty } from '../../types/Contract'
import { getItem } from '../../utils/ethers'
import ProgressBar from './ProgressBar'
import Select from 'react-select'

type Props = {
  warranty: Warranty
}

const WarrantyComponent = (prop: Props) => {
  const { warranty } = prop
  const [item, setItem] = React.useState<Item>()

  React.useEffect(() => {
    getItem(warranty.itemId).then((item) => {
      console.log(warranty.loyaltyLimit / item.loyaltyLimit)
      setItem(item)
    })
  }, [])

  const options = [
    { value: 'Working', label: 'Working' },
    { value: 'Issue', label: 'Issue' }
  ]

  return (
    <div className='card-pop-out border-white border-8 p-8 flex flex-col w-full gap-y-4'>
      <div className='flex justify-center w-full'>
        <img src={item?.imageURI} alt="" className='w-48 h-48' />
      </div>
      <div className='border-1 border-gray-300' />
      <div>
        <h1 className='text-xl'>{item?.name}</h1>
        <h3 className='text-sm'>{item?.description}</h3>
      </div>
      <div className='flex flex-col gap-y-4'>
        <ProgressBar progressPercentage={100} color='bg-green-500' />
        {/* @ts-ignore */}
        <ProgressBar progressPercentage={(warranty.loyaltyLimit / item?.loyaltyLimit) || (warranty.itemId == 1 ? 20 : 0)} color='bg-indigo-500' />
      </div>
      <Select options={options} />
    </div>
  )
}

export default WarrantyComponent