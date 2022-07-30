import React, { useContext, useEffect } from 'react'
import CustomerLayout from '../../components/Customer/CustomerLayout'
import WarrantyComponent from '../../components/SharedComponents/WarrantyComponent'
import { AppContext } from '../../context/AppProvider'
import { Warranty } from '../../types/Contract'

const Warranties = () => {
  const { state, dispatch } = useContext(AppContext)

  useEffect(() => {
    console.log(state.customer_warranties)
  }, [state])


  return (
    <CustomerLayout>
      <div className='grid grid-cols-3 gap-y-8 w-full'>
        {state.customer_warranties.map((warranty: Warranty, index: number) => (
          <WarrantyComponent key={index} warranty={warranty} />
        ))}
      </div>
    </CustomerLayout>
  )
}

export default Warranties