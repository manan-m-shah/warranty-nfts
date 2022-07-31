import React, { useContext, useEffect } from 'react'
import MyItems from '../../components/Merchant/MyItems'
import MerchantLayout from '../../components/Merchant/MerchantLayout'
import { ActionKind, AppContext } from '../../context/AppProvider'
import { getMyItems } from '../../utils/user'

// this page shows the existing items of the merchant
const items = () => {
  const { state, dispatch } = useContext(AppContext)

  useEffect(() => {
    const setMyItems = async () => {
      const items = await getMyItems()
      console.log(items)
      dispatch({ type: ActionKind.SET_ITEMS, payload: items })
    }
    setMyItems()
  }, [])

  return (
    <MerchantLayout>
      <MyItems />
    </MerchantLayout>
  )
}

export default items