import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppProvider'
import notify from '../../utils/notify'
import CustomerSidebar from './CustomerSidebar'

const CustomerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, dispatch } = useContext(AppContext)
  const router = useRouter()

  useEffect(() => {
    if (!state.customer.name) {
      router.push('/')
    }
  }, [state])


  return (
    state.customer.name ?
      <div className='w-screen grid grid-cols-4 mt-32'>
        <div className='col-span-1'>
          <CustomerSidebar />
        </div>
        <div className='col-span-3 w-full h-full flex flex-col items-center justify-start px-4'>{children}</div>
      </div>
      :
      <div className='flex w-full items-center justify-center'>
        Not a Customer
      </div>
  )
}

export default CustomerLayout