import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'

const ContextProvider = () => {
  const { state, dispatch } = useContext(AppContext)
  return {state, dispatch}
}

export default ContextProvider