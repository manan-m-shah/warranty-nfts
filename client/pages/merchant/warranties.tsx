import React, { useContext, useEffect } from 'react'
import MerchantLayout from '../../components/Merchant/MerchantLayout'
import { ActionKind, AppContext } from '../../context/AppProvider'
import { getMyItems } from '../../utils/user'

const warranties = () => {
  const { state, dispatch } = useContext(AppContext)

  return (
    <MerchantLayout>
      <div>warranties</div>
    </MerchantLayout>
  )
}

export default warranties